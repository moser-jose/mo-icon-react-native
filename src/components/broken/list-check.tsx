import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenListCheck: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 16 2.1 2.5 3.9-5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 14H3m7 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenListCheck };
export default React.memo(BrokenListCheck);
