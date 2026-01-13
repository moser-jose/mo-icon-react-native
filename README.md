## @mosmmy/mo-icon-react-native

Icon library for React Native based on SVG, with support for multiple variants (bold, bold-duotone, broken, outline, outline-duotone). Icons are generated from `.svg` files and rendered via `react-native-svg`.

[![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/github/package-json/v/moser-jose/mo-icon-react-native)](https://github.com/moser-jose/mo-icon-react-native)
[![npm](https://img.shields.io/npm/v/@mosmmy/mo-icon-react-native)](https://www.npmjs.com/package/@mosmmy/mo-icon-react-native)
[![npm downloads](https://img.shields.io/npm/dm/@mosmmy/mo-icon-react-native)](https://www.npmjs.com/package/@mosmmy/mo-icon-react-native)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@mosmmy/mo-icon-react-native)](https://bundlephobia.com/package/@mosmmy/mo-icon-react-native)
[![TypeScript](https://img.shields.io/badge/TypeScript-supported-blue)](https://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://jestjs.io/)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://github.com/moser-jose/mo-icon-react-native)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/moser-jose/mo-icon-react-native?style=social)](https://github.com/moser-jose/mo-icon-react-native/stargazers)

## Installation

```bash
npm install @mosmmy/mo-icon-react-native react-native-svg
# or
yarn add @mosmmy/mo-icon-react-native react-native-svg
# or
pnpm add @mosmmy/mo-icon-react-native react-native-svg
```

> Note: `react` (>=17), `react-native` (>=0.71.0) and `react-native-svg` (>=13) are peerDependencies.

## Basic usage

### Using the `Icon` component (Recommended)

```tsx
import React from 'react';
import { View } from 'react-native';
import { Icon } from '@mosmmy/mo-icon-react-native';

export default function Example() {
  return (
    <View>
      <Icon name="bell" type="outline" size={24} color="#333" />
      <Icon name="bell-off" type="bold" size={32} color="#E11D48" />
    </View>
  );
}
```

### Using individual icon components

You can import and use individual icon components directly for better tree-shaking and type safety. There are three ways to import individual components:

#### Option 1: Import from variant exports (Recommended for variant-specific imports)

Import icons from variant-specific exports. Icons are exported with PascalCase names (without the variant prefix):

```tsx
import React from 'react';
import { View } from 'react-native';
import { Home, Bell } from '@mosmmy/mo-icon-react-native/bold';
import { Home as OutlineHome, Bell as OutlineBell } from '@mosmmy/mo-icon-react-native/outline';

export default function Example() {
  return (
    <View>
      <Home size={24} color="#333" />
      <Bell size={32} color="#E11D48" />
      <OutlineHome size={24} color="#333" />
      <OutlineBell size={32} color="#E11D48" />
    </View>
  );
}
```

Available variant exports:

- `@mosmmy/mo-icon-react-native/bold`
- `@mosmmy/mo-icon-react-native/outline`
- `@mosmmy/mo-icon-react-native/broken`
- `@mosmmy/mo-icon-react-native/boldDuotone`
- `@mosmmy/mo-icon-react-native/outlineDuotone`

#### Option 2: Import from components-exports

If you need multiple components from different variants, you can import them from the components-exports file:

```tsx
import React from 'react';
import { View } from 'react-native';
import { BoldHome, OutlineHome, BoldBell } from '@mosmmy/mo-icon-react-native/components-exports';

export default function Example() {
  return (
    <View>
      <BoldHome size={24} color="#333" />
      <OutlineHome size={32} color="#E11D48" />
      <BoldBell size={48} color="#10B981" />
    </View>
  );
}
```

#### Option 3: Direct import from component files (Development only)

> **Note:** This method only works when developing the library itself or when the source files are available. For published packages, use Option 1 or Option 2.

Import directly from the component file path for optimal tree-shaking:

```tsx
import React from 'react';
import { View } from 'react-native';
import { BoldHome } from '@mosmmy/mo-icon-react-native/src/components/bold/home';
import { OutlineHome } from '@mosmmy/mo-icon-react-native/src/components/outline/home';
import { BoldBell } from '@mosmmy/mo-icon-react-native/src/components/bold/bell';

export default function Example() {
  return (
    <View>
      <BoldHome size={24} color="#333" />
      <OutlineHome size={32} color="#E11D48" />
      <BoldBell size={48} color="#10B981" />
    </View>
  );
}
```

**Benefits of individual imports:**

- Better tree-shaking (only imported icons are bundled)
- Direct component access without registry lookup
- Full TypeScript autocomplete support
- Slightly better performance (no runtime component resolution)

### Available variants

- **bold** - Bold filled icons
- **bold-duotone** - Bold icons with duotone effect
- **broken** - Broken/outline style icons
- **outline** - Outline style icons (default)
- **outline-duotone** - Outline icons with duotone effect

### `Icon` component props

- `name` (string): icon name (see the generated list in [icon-names.json](/icon-names.json)).
- `type` (optional): icon variant; default: `"outline"`.
- `size` (optional): size in px; default: `24`.
- `color` (optional): color (stroke/fill) in HEX; default: `#1C274C`.

### Individual icon component props

When importing individual components (e.g., `BoldHome`, `OutlineBell`), they accept:

- `size` (optional): size in px; default: `24`.
- `color` (optional): color (stroke/fill) in HEX; default: `#1C274C`.
- All other props from `react-native-svg`'s `SvgXml` component (except `width`, `height`, and `xml`).

## Generating icons from SVGs

1. Add/update your `.svg` files in `src/icons/<variant>/<folder>/...`.

> Note: Before adding new SVGs, make sure to check whether the name already exists in the list provided in [icon-names.json](/icon-names.json). If the name already exists, you **must rename** the SVG before including it.
> You need to add the SVGs according to the variant, e.g., **bold**, **bold-duotone**, **outline**, **outline-duotone**, and **broken**.

1. Run the generation script:

```bash
npm run generate:icons
# or
yarn run generate:icons
# or
pnpm run generate:icons
```

3. Run the tests to ensure everything is OK:

```bash
npm run test
# or
yarn run test
# or
pnpm run test

npm run test:ci #coverage
```

> **Note:** The project uses `@testing-library/react-native` for testing. All icon components are fully tested and support both the `Icon` component and individual component imports.

The script:

- Optimizes SVGs via SVGO;
- Generates TSX components that use `SvgXml` and accept `size` and `color`;
- Updates `registry.ts`, `types.d.ts` and `icon-names.json` based on what was found in `icons/`;
- Generates `components-exports.ts` with named exports for all individual icon components;
- Generates variant export files (`variants/Bold.ts`, `variants/Outline.ts`, etc.) for variant-specific imports.

## Best practices and notes

- Use kebab-case file names (e.g., `bell-bing.svg`). These names will be used as `name` in the `Icon`.
- If you add new variants, include the SVGs in `src/icons/<your-variant>/...` and run the generator.

## License

This project is governed by the [MIT License](/LICENSE). Just remember to be a nice person and send back any modifications, corrections or improvements. ✌️

## Icon credits

Icons created by 480 Design. Instagram: [@480_design](https://www.instagram.com/480_design)

## Author

| [<img src="https://avatars0.githubusercontent.com/u/8234620?" width="115"><br><sub>@moser-jose</sub>](https://github.com/moser-jose) |
| :----------------------------------------------------------------------------------------------------------------------------------: |
