import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSmartphoneRotateOrientation: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h1c2.828 0 4.243 0 5.121.879C15 3.757 15 5.172 15 8v8c0 2.828 0 4.243-.879 5.121C13.243 22 11.828 22 9 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17.5 10.006c1.86.027 2.914.165 3.621.872.879.879.879 2.293.879 5.121s0 4.243-.879 5.122c-.707.707-1.761.845-3.621.872"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 5H6m13 13v-4" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M10 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 6.986 22 8c0-3.015-2.162-5.517-5-6" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneSmartphoneRotateOrientation);
