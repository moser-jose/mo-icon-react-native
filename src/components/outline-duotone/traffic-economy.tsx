import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTrafficEconomy: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12A10 10 0 1 1 12 2" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 12h-3m0 0H9m3 0V9m0 3v3m2.5-12.686a10.02 10.02 0 0 1 7.185 7.185"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneTrafficEconomy);
