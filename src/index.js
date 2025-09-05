'use strict';
/**
 * Package entry for JS/React Native.
 * Exposes named exports for the component and the icon registry.
 */
const { Icon } = require('./Icon');
const { iconRegistry } = require('./registry');

module.exports = { Icon, iconRegistry };
