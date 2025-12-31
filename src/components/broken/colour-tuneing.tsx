import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenColourTuneing: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 12h7.5M22 12h-7.5m5.5 3.684C20 19 17.735 22 16 22c-1.257 0-2.328-.97-3.032-3M4.144 8.316C4.144 5 6.41 2 8.144 2c2.269 0 3.928 3.158 3.928 10q.002 1.64.123 3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenColourTuneing);
