import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCassette2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828"/><path stroke="${color}" stroke-width="1.5" d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.5 11.5H16M8.5 16H16"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.228 8.5c1.34 0 2.011 0 2.525-.356s.75-.984 1.22-2.24L17.5 4.5m-11 0 .527 1.404c.47 1.256.706 1.884 1.22 2.24.212.147.451.233.753.284"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenCassette2);
