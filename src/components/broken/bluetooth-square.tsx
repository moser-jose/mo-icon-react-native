import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBluetoothSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M13.933 9.8 11 12V8c0-.873 0-1.31.276-1.448.277-.138.626.124 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.434-.734.8Zm0 6-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z"/><path fill="${color}" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5-3-2.5-.96 1.152 3 2.5z"/><path fill="${color}" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5-3 2.5-.96-1.152 3-2.5z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBluetoothSquare };
export default React.memo(BrokenBluetoothSquare);
