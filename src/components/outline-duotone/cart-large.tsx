import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCartLarge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m2 3 .265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h8"/><path stroke="${color}" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 9H8" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M5 6h11.45c2.055 0 3.083 0 3.528.674.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57-.376.248-.856.248-1.815.248H5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneCartLarge);
