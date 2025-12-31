import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBackpack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 10.73v5.645a4.52 4.52 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.52 4.52 0 0 1 3 16.375v-5.644a6 6 0 0 1 4.618-5.757l.176-.04.167-.036a19 19 0 0 1 8.421.076A6 6 0 0 1 19.632 7M17.5 15.5V17"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5M3 14a22.2 22.2 0 0 0 5 1.546M21 14a22.15 22.15 0 0 1-9 1.91M10 13h4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBackpack);
