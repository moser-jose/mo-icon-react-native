#!/usr/bin/env ts-node
/*
  Author: @moser-jose
  Date: 2025-09-04

  Icon generator for React Native (TypeScript)
  - Scans src/icons/img/<variant>/**.svg
  - Produces components at src/icons/svg/<variant>/<relativePath>.tsx using SvgXml from react-native-svg
  - Builds src/registry.ts mapping: { [variant]: { [nameKey]: Component } }
  - Name key is the file path relative to the variant dir without extension (e.g. "bell-bing")
*/

import fs from "fs";
import path from "path";
import { optimize } from "svgo";

const ROOT_DIR = path.resolve(__dirname, "..");
const SVG_DIR = path.resolve(ROOT_DIR, "src", "icons", "img");
const OUT_DIR = path.resolve(ROOT_DIR, "src", "icons", "svg");
const REGISTRY_FILE = path.resolve(ROOT_DIR, "src", "registry.ts");
const TYPES_FILE = path.resolve(ROOT_DIR, "src", "types", "Icon.d.ts");

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function safeReadDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function listSvgFiles(dir: string): string[] {
  const results: string[] = [];
  function walk(current: string) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.toLowerCase().endsWith(".svg"))
        results.push(full);
    }
  }
  walk(dir);
  return results;
}

function normalizeFilenames(rootDirectory: string): void {
  function walk(currentDirectory: string): void {
    const entries = fs.readdirSync(currentDirectory, { withFileTypes: true });
    for (const entry of entries) {
      const currentFullPath = path.join(currentDirectory, entry.name);

      if (entry.isDirectory()) {
        walk(currentFullPath);
        continue;
      }

      if (entry.isFile()) {
        const { name: baseName, ext } = path.parse(entry.name);
        const normalizedBase = baseName.toLowerCase().replace(/ /g, "-");
        const normalizedExt = ext.toLowerCase();
        const newFileName = `${normalizedBase}${normalizedExt}`;
        const newFullPath = path.join(currentDirectory, newFileName);

        if (currentFullPath !== newFullPath) {
          try {
            fs.renameSync(currentFullPath, newFullPath);
            console.log(`✔ Renamed: ${currentFullPath} → ${newFullPath}`);
          } catch (error) {
            console.error(
              `✖ Failed to rename ${currentFullPath} → ${newFullPath}`,
              error
            );
          }
        }
      }
    }
  }

  if (!fs.existsSync(rootDirectory)) {
    console.error("Directory not found:", rootDirectory);
    process.exit(1);
  }

  walk(rootDirectory);
}

function toNameKey(fileFullPath: string): string {
  const base = path.basename(fileFullPath);
  const withoutExt = base.replace(/\.svg$/i, "");
  return withoutExt; // keep dashes, filename only
}

function toComponentName(variant: string, nameKey: string): string {
  const variantPart = variant
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  const parts = nameKey.split("/");
  const fileBase = parts.pop() as string;
  const catPart = parts
    .map((s) =>
      s
        .split(/[-_]/)
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join("")
    )
    .join("");
  const filePart = fileBase
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  return `${variantPart}${catPart}${filePart}`;
}

function prepareXml(svgXml: string, variant: string): string {
  const optimized = optimize(svgXml, {
    multipass: true,
    plugins: ["preset-default", "removeXMLNS"],
  }).data;

  let xml = optimized
    .replace(/\swidth="[^"]+"/gi, "")
    .replace(/\sheight="[^"]+"/gi, "");

  // ensure viewBox="0 0 24 24"
  const svgOpenTagPattern = /<svg\b([\s\S]*?)>/i;
  const viewBoxPattern = /\bviewBox\s*=\s*['"][^'\"]+['"]/i;

  if (svgOpenTagPattern.test(xml)) {
    if (viewBoxPattern.test(xml)) {
      // Replace any existing viewBox with the standard one
      xml = xml.replace(viewBoxPattern, 'viewBox="0 0 24 24"');
    } else {
      // Inject viewBox if missing
      xml = xml.replace(svgOpenTagPattern, (match, attrs) => {
        return `<svg${attrs} viewBox="0 0 24 24">`;
      });
    }
  }

  // stroke
  xml = xml.replace(/stroke="(?!none)[^"]+"/gi, 'stroke="${color}"');
  // fill
  if (variant.startsWith("bold")) {
    xml = xml.replace(/fill="(?!none)[^"]+"/gi, 'fill="${color}"');
  } else {
    xml = xml.replace(/fill="(?!none)[^"]+"/gi, 'fill="${color}"');
  }

  return xml.trim();
}

function makeComponentSource(
  componentName: string,
  xmlTemplate: string
): string {
  return `import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const ${componentName}: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = \`${xmlTemplate}\`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(${componentName});
`;
}

type RegistryEntry = {
  variant: string;
  nameKey: string;
  relImportPath: string;
};

function writeRegistry(
  registryEntries: RegistryEntry[],
  variants: string[]
): void {
  const lines: string[] = [];
  lines.push("/* Author: @moser-jose */");
  lines.push("/* Date: " + new Date().toISOString().split("T")[0] + " */");
  lines.push("/*");
  lines.push(
    "  - Builds src/icons/registry.ts mapping: { [variant]: { [nameKey]: Component } }"
  );
  lines.push(
    '  - Name key is the file path relative to the variant dir without extension (e.g. "bell-bing")'
  );
  lines.push("*/");
  lines.push("");
  lines.push(
    "import type { IconComponentProps as IconProps } from './types/Icon';"
  );
  lines.push("");
  lines.push("");
  lines.push(
    "export type IconType = " + variants.map((v) => `'${v}'`).join(" | ") + ";"
  );
  lines.push("");
  lines.push(
    "export const iconRegistry: Record<IconType, Record<string, unknown>> = {"
  );

  const byVariant = registryEntries.reduce<Record<string, RegistryEntry[]>>(
    (acc, e) => {
      if (!acc[e.variant]) acc[e.variant] = [];
      acc[e.variant].push(e);
      return acc;
    },
    {}
  );

  const sortedVariants = Object.keys(byVariant).sort();
  sortedVariants.forEach((variant, vIdx) => {
    lines.push(`  '${variant}': {`);
    byVariant[variant]
      .sort((a, b) => a.nameKey.localeCompare(b.nameKey))
      .forEach((e) => {
        lines.push(
          `    '${e.nameKey}': require('${e.relImportPath}').default as React.ComponentType<IconProps>,`
        );
      });
    lines.push("  }" + (vIdx < sortedVariants.length - 1 ? "," : ""));
  });

  lines.push("};");
  lines.push("");
  fs.writeFileSync(REGISTRY_FILE, lines.join("\n"), "utf8");
}

function writeTypes(namesByVariant: Record<string, string[]>): void {
  const lines: string[] = [];
  lines.push("/* Author: @moser-jose */");
  lines.push("/* Date: " + new Date().toISOString().split("T")[0] + " */");
  lines.push("/*");
  lines.push(
    "  - Builds src/types/Icon.d.ts mapping: { [variant]: [nameKey1, nameKey2, ...] }"
  );
  lines.push(
    '  - Name key is the file path relative to the variant dir without extension (e.g. "bell-bing")'
  );
  lines.push("*/");
  lines.push("");
  lines.push("export interface IconNamesByVariant {");
  const variants = Object.keys(namesByVariant).sort();
  variants.forEach((variant) => {
    const names = (namesByVariant[variant] || []).slice().sort();
    const union = names.map((n) => `'${n}'`).join(" | ") || "never";
    lines.push(`  '${variant}': ${union};`);
  });
  lines.push("}");
  lines.push("");
  lines.push("export type IconVariant = keyof IconNamesByVariant;");
  lines.push("export type AnyIconName = IconNamesByVariant[IconVariant];");
  lines.push(
    "export type IconComponentProps = { size?: number; color?: string };"
  );
  lines.push("");
  ensureDir(path.dirname(TYPES_FILE));
  fs.writeFileSync(TYPES_FILE, lines.join("\n"), "utf8");
}

function main(): void {
  const providedPath = "./src/icons/img";
  const defaultPath = path.resolve(__dirname, "..", "src", "icons", "img");
  const targetPath = providedPath
    ? path.resolve(process.cwd(), providedPath)
    : defaultPath;

  normalizeFilenames(targetPath);

  if (!fs.existsSync(SVG_DIR)) {
    console.error("SVG source directory not found:", SVG_DIR);
    process.exit(1);
  }

  ensureDir(OUT_DIR);

  const variants = safeReadDir(SVG_DIR);
  if (variants.length === 0) {
    console.warn("No variants found under", SVG_DIR);
  }

  const registryEntries: RegistryEntry[] = [];

  for (const variant of variants) {
    const variantSrcDir = path.join(SVG_DIR, variant);
    const files = listSvgFiles(variantSrcDir);
    for (const file of files) {
      const nameKey = toNameKey(file); // may include categories
      const componentName = toComponentName(variant, nameKey);

      const raw = fs.readFileSync(file, "utf8");
      const xml = prepareXml(raw, variant);

      const outFileDir = path.join(OUT_DIR, variant, path.dirname(nameKey));
      ensureDir(outFileDir);
      const outFile = path.join(outFileDir, path.basename(nameKey) + ".tsx");
      const source = makeComponentSource(componentName, xml);
      fs.writeFileSync(outFile, source, "utf8");

      const relImportPathWithExt =
        "./" +
        path
          .relative(path.dirname(REGISTRY_FILE), outFile)
          .replace(/\\\\/g, "/");
      const relImportPath = relImportPathWithExt.replace(/\.tsx$/i, "");
      registryEntries.push({ variant, nameKey, relImportPath });
    }
  }

  const namesByVariant = registryEntries.reduce<Record<string, string[]>>(
    (acc, e) => {
      if (!acc[e.variant]) acc[e.variant] = [];
      acc[e.variant].push(e.nameKey);
      return acc;
    },
    {}
  );
  writeTypes(namesByVariant);
  writeRegistry(registryEntries, variants);
  const namesFile = path.resolve(ROOT_DIR, "src", "icon-names.json");
  ensureDir(path.dirname(namesFile));
  fs.writeFileSync(namesFile, JSON.stringify(namesByVariant, null, 2), "utf8");

  console.log(
    `Generated ${registryEntries.length} icon components across ${
      Object.keys(namesByVariant).length
    } variants.`
  );
}

main();
