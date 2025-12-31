import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneLaptop2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4h-5c-2.828 0-4.243 0-5.121.879C3.5 5.757 3.5 7.172 3.5 10v5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5 20h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneLaptop2);
