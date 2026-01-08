import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenListArrowUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 14H3m8 4H3"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 16.5 17.5 14m0 0L15 16.5m2.5-2.5v6"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenListArrowUp };
export default React.memo(BrokenListArrowUp);
