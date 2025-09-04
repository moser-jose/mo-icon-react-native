## @mosmmy/mo-icon-react-native

Icon library for React Native based on SVG, with support for multiple variants (bold, bold-duotone, broken, outline, outline-duotone). Icons are generated from `.svg` files and rendered via `react-native-svg`.

## Installation

```bash
npm install @mosmmy/mo-icon-react-native react-native-svg
# or
yarn add @mosmmy/mo-icon-react-native react-native-svg
```

> Note: `react` (>=17), `react-native` (>=0.71.0) and `react-native-svg` (>=13) are peerDependencies.

## Basic usage

```tsx
import React from "react";
import { View } from "react-native";
import { Icon } from "@mosmmy/mo-icon-react-native";

export default function Example() {
  return (
    <View>
      <Icon name="bell" type="outline" size={24} color="#333" />
      <Icon name="bell-off" type="bold" size={32} color="#E11D48" />
    </View>
  );
}
```

### Available variants

- bold --> (e.g., <img src="src/icons/img/bold/notifications/bell.svg" alt="bell bold icon" width="18">)
- bold-duotone --> (e.g., <img src="src/icons/img/bold-duotone/notifications/bell.svg" alt="bell bold icon" width="18">)
- broken --> (e.g., <img src="src/icons/img/broken/notifications/bell.svg" alt="bell bold icon" width="18">)
- outline --> (e.g., <img src="src/icons/img/outline/notifications/bell.svg" alt="bell bold icon" width="18">)
- outline-duotone --> (e.g., <img src="src/icons/img/outline-duotone/notifications/bell.svg" alt="bell bold icon" width="18">)

### `Icon` props

- `name` (string): icon name (see the generated list in `src/icon-names.json`).
- `type` (optional): icon variant; default: `"outline"`.
- `size` (optional): size in px; default: `24`.
- `color` (optional): color (stroke/fill) in HEX; default: `#1C274C`.

## Project structure

- `src/icons/img/<variant>/...`: input SVGs (organize as you prefer; e.g., `notifications/bell.svg`).
- `src/icons/svg/<variant>/...`: generated TSX components from the SVGs.
- `src/registry.ts`: generated registry mapping `{ [variant]: { [name]: Component } }`.
- `src/types/Icon.d.ts`: types generated from the discovered names.
- `src/icon-names.json`: JSON with names grouped by variant.
- `src/Icon.tsx`: `Icon` component that resolves and renders the corresponding component.

## Generating icons from SVGs

1. Add/update your `.svg` files in `src/icons/img/<variant>/<folder>/...`.


2. Run the generation script:

```bash
npm run generate:icons
```

3. Run the tests to ensure everything is OK:

```bash
npm run test

npm run test:ci #coverage
```

The script:

- Optimizes SVGs via SVGO;
- Generates TSX components that use `SvgXml` and accept `size` and `color`;
- Updates `registry.ts`, `types.ts` and `icon-names.json` based on what was found in `img/`.

## Best practices and notes

- Use kebab-case file names (e.g., `bell-bing.svg`). These names will be used as `name` in the `Icon`.
- If you add new variants, include the SVGs in `src/icons/img/<your-variant>/...` and run the generator.
- If you consume the lib directly from the repository (without build), ensure the generated files are up to date.

## License

This project is governed by the [MIT](/LICENSE.md). Just remember to be a nice person and send back any modifications, corrections or improvements. ✌️

## Author

| [<img src="https://avatars0.githubusercontent.com/u/8234620?" width="115"><br><sub>@moser-jose</sub>](https://github.com/moser-jose) |
| :----------------------------------------------------------------------------------------------------------------------------------: |
