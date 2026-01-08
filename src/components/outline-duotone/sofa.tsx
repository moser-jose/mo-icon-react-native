import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSofa: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M5.556 18h12.888A3.556 3.556 0 0 0 22 14.444V12a2 2 0 1 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 1 0-4 0v2.444A3.556 3.556 0 0 0 5.556 18Z"/><path stroke="${color}" stroke-width="1.5" d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 19v-1M4 19v-1" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSofa };
export default React.memo(OutlineDuotoneSofa);
