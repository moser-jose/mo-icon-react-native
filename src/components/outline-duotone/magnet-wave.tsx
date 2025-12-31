import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMagnetWave: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18v1.5a1.5 1.5 0 0 1-1.5 1.5H11a9 9 0 1 1 0-18h5.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-5.556a4.5 4.5 0 0 0 0 9H16.5A1.5 1.5 0 0 1 18 18"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.444 3v4.5m0 9V21" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6" opacity=".7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19.5 9s.5.9.5 3-.5 3-.5 3" opacity=".4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneMagnetWave);
