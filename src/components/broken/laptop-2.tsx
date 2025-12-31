import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenLaptop2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4H14M3.5 15v-5c0-2.828 0-4.243.879-5.121C5.257 4 6.672 4 9.5 4h.5m2 16H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h4.333a2 2 0 0 1 1.2.4l.934.7a2 2 0 0 0 1.2.4h2.666a2 2 0 0 0 1.2-.4l.934-.7a2 2 0 0 1 1.2-.4H21a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenLaptop2);
