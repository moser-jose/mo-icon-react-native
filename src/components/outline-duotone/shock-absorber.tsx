import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneShockAbsorber: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M6 4c0-.943 0-1.414.293-1.707S7.057 2 8 2h8c.943 0 1.414 0 1.707.293S18 3.057 18 4s0 1.414-.293 1.707S16.943 6 16 6H8c-.943 0-1.414 0-1.707-.293S6 4.943 6 4Zm2.5 12.5A1.5 1.5 0 0 1 10 15h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1-1.5-1.5Z"/><path stroke="${color}" stroke-width="1.5" d="M14 15.5v-10m-4 10V6" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m8 8 8 2m-8 1.5 8 2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 11.5h2m-18 0H2m17.071 2.8.707.7m-14.85-.7-.706.7m14.85-6.3.706-.7m-14.85.7L4.223 8" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneShockAbsorber);
