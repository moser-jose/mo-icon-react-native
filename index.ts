export { Icon } from './src/Icon';
export { iconRegistry } from './src/registry';
export type { IconType } from './src/registry';
export type { IconProps } from './src/Icon';

// Individual icon components are available for direct import
// Option 1: Import directly from component files (recommended for tree-shaking)
//   import { BoldHome } from '@mosmmy/mo-icon-react-native/src/components/bold/home';
//
// Option 2: Import from components-exports (if you need many components)
//   import { BoldHome, OutlineHome } from '@mosmmy/mo-icon-react-native/src/components-exports';
//
// Option 3: Import all components (not recommended - increases bundle size)
//   import * as Icons from '@mosmmy/mo-icon-react-native/src/components-exports';
//
// Note: We don't export all components by default to avoid unnecessary bundle size.
// Use the Icon component for dynamic icon selection, or import components individually.
