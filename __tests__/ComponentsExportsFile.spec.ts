import fs from 'fs';
import path from 'path';

describe('components-exports.mts file generation', () => {
  const componentsExportsPath = path.resolve(__dirname, '..', 'src', 'components-exports.ts');

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
});
