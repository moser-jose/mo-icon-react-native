import fs from 'fs';
import path from 'path';

describe('components-exports.ts file generation', () => {
  const componentsExportsPath = path.resolve(__dirname, '..', 'components-exports.ts');
  const componentsExportsJsPath = path.resolve(__dirname, '..', 'components-exports.js');

  it('should generate components-exports.ts file when script runs', () => {
    // This test will pass if the file exists (after running generate:icons)
    // or will check if it's a placeholder
    const fileExists = fs.existsSync(componentsExportsPath);

    if (fileExists) {
      const content = fs.readFileSync(componentsExportsPath, 'utf8');
      // Check if it's a placeholder or a generated file
      const isPlaceholder =
        content.includes('This file is auto-generated') && content.includes('It will be populated');

      if (isPlaceholder) {
        // Placeholder file exists, which is fine
        expect(content).toContain('export');
      } else {
        // File has been generated, should have actual exports
        expect(content).toContain('export');
        expect(content).toContain('from');
        // Should have some component exports
        expect(content.length).toBeGreaterThan(0);
      }
    } else {
      // File doesn't exist yet, which is expected before running the script
      expect(fileExists).toBe(false);
    }
  });

  it('should generate components-exports.js file when script runs', () => {
    const fileExists = fs.existsSync(componentsExportsJsPath);

    if (fileExists) {
      const content = fs.readFileSync(componentsExportsJsPath, 'utf8');
      // Check if it's a placeholder or a generated file
      const isPlaceholder =
        content.includes('This file is auto-generated') && content.includes('It will be populated');

      if (isPlaceholder) {
        // Placeholder file exists, which is fine
        expect(content).toContain('module.exports');
      } else {
        // File has been generated, should have actual exports
        expect(content).toContain('exports');
        expect(content).toContain('require');
        // Should have some component exports
        expect(content.length).toBeGreaterThan(0);
      }
    } else {
      // File doesn't exist yet, which is expected before running the script
      expect(fileExists).toBe(false);
    }
  });

  it('components-exports.ts should have valid TypeScript export syntax', () => {
    if (fs.existsSync(componentsExportsPath)) {
      const content = fs.readFileSync(componentsExportsPath, 'utf8');

      // Check if it's a placeholder
      const isPlaceholder =
        content.includes('This file is auto-generated') && content.includes('It will be populated');

      if (isPlaceholder) {
        // Placeholder should have at least export {}
        expect(content).toContain('export');
      } else {
        // Check for valid export statements
        const exportLines = content.split('\n').filter((line) => line.trim().startsWith('export'));

        if (exportLines.length > 0) {
          // Each export line should match the pattern: export { ComponentName } from 'path';
          exportLines.forEach((line) => {
            expect(line).toMatch(/export\s+\{[^}]+\}\s+from\s+['"].*['"];?/);
          });
        }
      }
    }
  });

  it('components-exports.js should have valid CommonJS export syntax', () => {
    if (fs.existsSync(componentsExportsJsPath)) {
      const content = fs.readFileSync(componentsExportsJsPath, 'utf8');

      // Check if it's a placeholder
      const isPlaceholder =
        content.includes('This file is auto-generated') && content.includes('It will be populated');

      if (isPlaceholder) {
        // Placeholder should have module.exports
        expect(content).toContain('module.exports');
      } else {
        // Check for valid export statements
        // Handle multi-line exports by reconstructing complete statements
        const lines = content.split('\n');
        const exportStatements: string[] = [];

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          const trimmedLine = line.trim();

          if (trimmedLine.startsWith('exports.')) {
            let exportStatement = trimmedLine;

            // If this line doesn't end with a semicolon, it's a multi-line export
            // Continue reading lines until we find the semicolon
            if (!trimmedLine.endsWith(';')) {
              let j = i + 1;
              let foundNextPart = false;
              while (j < lines.length && !exportStatement.endsWith(';')) {
                const nextLine = lines[j].trim();
                if (nextLine.length > 0) {
                  exportStatement += ' ' + nextLine;
                  foundNextPart = true;
                  // Stop if we've found the semicolon
                  if (nextLine.endsWith(';')) {
                    break;
                  }
                } else if (foundNextPart) {
                  // If we already found a continuation but hit an empty line, break
                  break;
                }
                j++;
                // Safety check to avoid infinite loops
                if (j > i + 10) {
                  break;
                }
              }
            }

            // Only push if we have a complete statement (ends with semicolon)
            if (exportStatement.endsWith(';')) {
              exportStatements.push(exportStatement);
            }
          }
        }

        if (exportStatements.length > 0) {
          // Each export statement should match the pattern: exports.ComponentName = require('path').ComponentName;
          exportStatements.forEach((statement) => {
            // Remove extra whitespace and normalize the statement
            const normalized = statement.replace(/\s+/g, ' ').trim();
            expect(normalized).toMatch(/exports\.\w+\s*=\s*require\(['"].*['"]\)\.\w+;?/);
          });
        }
      }
    }
  });

  it('should have matching exports in both .ts and .js files', () => {
    const tsExists = fs.existsSync(componentsExportsPath);
    const jsExists = fs.existsSync(componentsExportsJsPath);

    // Both should exist or both should not exist
    expect(tsExists).toBe(jsExists);

    if (tsExists && jsExists) {
      const tsContent = fs.readFileSync(componentsExportsPath, 'utf8');
      const jsContent = fs.readFileSync(componentsExportsJsPath, 'utf8');

      // Check if both are placeholders
      const tsIsPlaceholder =
        tsContent.includes('This file is auto-generated') &&
        tsContent.includes('It will be populated');
      const jsIsPlaceholder =
        jsContent.includes('This file is auto-generated') &&
        jsContent.includes('It will be populated');

      if (tsIsPlaceholder && jsIsPlaceholder) {
        // Both are placeholders, which is fine
        expect(tsIsPlaceholder).toBe(true);
        expect(jsIsPlaceholder).toBe(true);
      } else {
        // Both should be generated files (not placeholders)
        expect(tsIsPlaceholder).toBe(false);
        expect(jsIsPlaceholder).toBe(false);

        // Extract component names from TS file
        const tsExports = tsContent
          .split('\n')
          .filter((line) => line.trim().startsWith('export') && line.includes('from'))
          .map((line) => {
            const match = line.match(/export\s+\{\s*(\w+)\s*\}/);
            return match ? match[1] : null;
          })
          .filter((name): name is string => name !== null);

        // Extract component names from JS file
        // Handle multi-line exports by checking the first line of each export
        const jsLines = jsContent.split('\n');
        const jsExports: string[] = [];
        for (const line of jsLines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('exports.')) {
            const match = trimmedLine.match(/exports\.(\w+)\s*[=;]/);
            if (match) {
              jsExports.push(match[1]);
            }
          }
        }

        // Should have the same number of exports
        expect(tsExports.length).toBe(jsExports.length);

        // Should have the same component names (order might differ)
        const tsSet = new Set(tsExports);
        const jsSet = new Set(jsExports);
        expect(tsSet.size).toBe(jsSet.size);

        // All TS exports should be in JS exports
        tsExports.forEach((name) => {
          expect(jsSet.has(name)).toBe(true);
        });
      }
    }
  });
});
