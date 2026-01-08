import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMagnetWave: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.444 3H16.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5H11c-1.488 0-2.891.36-4.127 1m7.571-1v4.5m0 0h-3.5A4.5 4.5 0 0 0 7.59 15m6.854 1.5H16.5A1.5 1.5 0 0 1 18 18v1.5a1.5 1.5 0 0 1-1.5 1.5h-2.056m0-4.5h-3.5m3.5 0V21m0 0H11A9 9 0 0 1 3.516 7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6m-2-9s.5.9.5 3-.5 3-.5 3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMagnetWave };
export default React.memo(BrokenMagnetWave);
