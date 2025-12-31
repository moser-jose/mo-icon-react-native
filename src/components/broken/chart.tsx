import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenChart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"/><path stroke="${color}" stroke-width="1.5" d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 22V9M9 22V5c0-1.414 0-2.121.44-2.56C9.878 2 10.585 2 12 2s2.121 0 2.56.44C15 2.878 15 3.585 15 5v0"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 22V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V16m0 6v-2.25"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenChart);
