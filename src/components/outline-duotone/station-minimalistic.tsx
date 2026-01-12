import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneStationMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.988 12.005A4.24 4.24 0 0 1 7.8 9.055c0-2.338 1.88-4.233 4.2-4.233s4.2 1.895 4.2 4.233c0 1.13-.44 2.158-1.157 2.917" opacity=".7"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 22-4-12-4 12"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.5 17.5h-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneStationMinimalistic };
export default React.memo(OutlineDuotoneStationMinimalistic);
