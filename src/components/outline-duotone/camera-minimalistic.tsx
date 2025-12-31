import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCameraMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="13" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M10 20h4c2.809 0 4.214 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 17.213 21 15.81 21 13s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 6 16.81 6 14 6h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 8.787 3 10.19 3 12.998V13c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C5.787 20 7.19 20 10 20Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 10h-.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.5 3.5h-5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneCameraMinimalistic);
