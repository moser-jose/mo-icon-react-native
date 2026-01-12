import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/components-exports.ts',
    'src/variants/Bold.ts',
    'src/variants/Outline.ts',
    'src/variants/Broken.ts',
    'src/variants/BoldDuotone.ts',
    'src/variants/OutlineDuotone.ts',
  ],
  outDir: 'dist',
  format: ['esm'],
  platform: 'neutral',
  dts: true,
  clean: true,
  fixedExtension: true,
  minify: true,
  treeshake: true,
  unbundle: true,
  target: 'esnext',
  sourcemap: false,
  outExtensions: () => ({
    js: '.mjs',
    dts: '.d.mts',
  }),
});
