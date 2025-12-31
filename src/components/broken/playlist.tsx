import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPlaylist: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 14H3m8 4H3"/><path stroke="${color}" stroke-width="1.5" d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.121-1.654.955-2.48 1.433-3.138 1.194a1.5 1.5 0 0 1-.451-.261c-.536-.45-.536-1.404-.536-3.314s0-2.865.536-3.314a1.5 1.5 0 0 1 .451-.26c.657-.24 1.484.238 3.138 1.192Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenPlaylist);
