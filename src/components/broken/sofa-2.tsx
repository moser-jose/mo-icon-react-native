import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSofa2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 18H5.556A3.556 3.556 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444A3.556 3.556 0 0 1 18.444 18H12"/><path stroke="${color}" stroke-width="1.5" d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10"/><path fill="${color}" d="M12.75 11a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zm0 4v3h1.5v-3zm0-6v2h1.5V5z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 19v-1M4 19v-1"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSofa2 };
export default React.memo(BrokenSofa2);
