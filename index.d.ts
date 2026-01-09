/**
 * Type definitions for @mosmmy/mo-icon-react-native
 * Re-exports all public types and interfaces
 */
export { Icon } from './src/Icon';
export { iconRegistry } from './src/registry';
export type { IconType } from './src/registry';
export type { IconProps } from './src/Icon';

// Individual icon components are available for direct import
// Option 1: Import directly from component files (recommended for tree-shaking)
//   import { BoldHome } from '@mosmmy/mo-icon-react-native/src/components/bold/home';
//
// Option 2: Import from components-exports (if you need many components)
//   import { BoldHome, OutlineHome } from '@mosmmy/mo-icon-react-native/components-exports';
//
// Note: We don't export all components by default to avoid unnecessary bundle size.
// Use the Icon component for dynamic icon selection, or import components individually.

