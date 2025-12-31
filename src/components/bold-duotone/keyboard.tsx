import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneKeyboard: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16 5H8c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11v2c0 2.828 0 4.243.879 5.121C3.757 19 5.172 19 8 19h8c2.828 0 4.243 0 5.121-.879C22 17.243 22 15.828 22 13v-2c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5" opacity=".5"/><path fill="${color}" d="M6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-.25 3a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneKeyboard);
