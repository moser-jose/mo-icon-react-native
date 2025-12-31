import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineBackpack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M10 12.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"/><path fill="${color}" fill-rule="evenodd" d="M7.32 4.275A3.75 3.75 0 0 1 11 1.25h2a3.75 3.75 0 0 1 3.68 3.025 6.75 6.75 0 0 1 5.07 6.445v5.655a5.27 5.27 0 0 1-4.126 5.143 25.9 25.9 0 0 1-11.248 0 5.27 5.27 0 0 1-4.126-5.143V10.72a6.75 6.75 0 0 1 5.07-6.445m1.694-.335A2.25 2.25 0 0 1 11 2.75h2c.86 0 1.607.482 1.986 1.19a19.8 19.8 0 0 0-5.972 0m11.236 6.971v2.596a21.4 21.4 0 0 1-16.5 0V10.74a5.25 5.25 0 0 1 4.207-5.074c.084-.02.124-.028.164-.037a18.25 18.25 0 0 1 7.759 0c.039.01.079.018.163.037l.166.037a5.25 5.25 0 0 1 4.041 5.207m-16.5 5.464v-1.252a22.9 22.9 0 0 0 13 1.04V17a.75.75 0 0 0 1.5 0v-1.209a23 23 0 0 0 2-.668v1.252a3.77 3.77 0 0 1-2.951 3.68c-3.49.775-7.108.775-10.598 0a3.77 3.77 0 0 1-2.951-3.68" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineBackpack);
