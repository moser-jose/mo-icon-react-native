'use strict';
/**
 * Package entry for JS/React Native.
 * Exposes named exports for the component and the icon registry.
 *
 * Individual icon components are available for direct import:
 * - Option 1: Import directly from component files (recommended for tree-shaking)
 *   const { BoldHome } = require('@mosmmy/mo-icon-react-native/src/components/bold/home');
 *
 * - Option 2: Import from components-exports (if you need many components)
 *   const { BoldHome, OutlineHome } = require('@mosmmy/mo-icon-react-native/components-exports');
 *
 * Note: We don't export all components by default to avoid unnecessary bundle size.
 * Use the Icon component for dynamic icon selection, or import components individually.
 */
const { Icon } = require('./src/Icon');
const { iconRegistry } = require('./src/registry');

module.exports = { Icon, iconRegistry };
