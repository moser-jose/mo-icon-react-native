import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineSortByTime: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.25 7A.75.75 0 0 1 2 6.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7M17 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M11.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M17 9.25a.75.75 0 0 1 .75.75v1.566l.817.943a.75.75 0 0 1-1.134.982l-1-1.154a.75.75 0 0 1-.183-.49V10a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineSortByTime);
