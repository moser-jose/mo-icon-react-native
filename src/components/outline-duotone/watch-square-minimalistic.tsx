import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWatchSquareMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3.077L14 14"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 2h10M7 22h10"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneWatchSquareMinimalistic);
