import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTv: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12v4c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8z" clip-rule="evenodd"/><path fill="${color}" d="M22 12v4c0 2.828 0 4.242-.879 5.121-.825.825-2.123.876-4.621.879H16V6h.5c2.498.003 3.796.053 4.621.878C22 7.758 22 9.171 22 12m-8.584-6 2.153-2.512a.75.75 0 0 0-1.138-.976L12 5.348 9.57 2.512a.75.75 0 0 0-1.14.976L10.585 6z" opacity=".5"/><path fill="${color}" d="M19 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneTv);
