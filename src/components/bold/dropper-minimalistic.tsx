import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDropperMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M19 11.75v1.5h-2a.75.75 0 0 0 0 1.5h2v1.133c0 .76-.32 1.487-.88 2.001a9.02 9.02 0 0 1-5.37 2.352v1.014a.75.75 0 0 1-1.5 0v-1.014a9.02 9.02 0 0 1-5.37-2.352 2.72 2.72 0 0 1-.88-2V8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586.503.502.574 1.267.584 2.664H17a.75.75 0 0 0 0 1.5h2v1.5h-2a.75.75 0 0 0 0 1.5zM12 14c1.105 0 2-.933 2-2.083 0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3 0 1.15.895 2.083 2 2.083" clip-rule="evenodd"/><path fill="${color}" d="M13.733 3a2 2 0 0 0-3.465 0z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDropperMinimalistic);
