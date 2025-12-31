import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTennis2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3.34 17c2.76 4.783 8.877 6.42 13.66 3.66a9.96 9.96 0 0 0 4.197-4.731 9.99 9.99 0 0 0-.537-8.93 9.99 9.99 0 0 0-7.464-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"/><path stroke="${color}" stroke-dasharray="1.5 2" stroke-width="1.5" d="M13.196 2.07s-1.098 4.099 1.402 8.43 6.599 5.428 6.599 5.428M2.803 8.07s4.099 1.1 6.599 5.43 1.402 8.428 1.402 8.428" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneTennis2);
