import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCameraMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="13" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 13c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C5.787 6 7.19 6 10 6h4c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C21 8.787 21 10.19 21 13s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C18.213 20 16.81 20 14 20h-4c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104c-.232-.347-.384-.74-.484-1.222M18 10h-.5m-3-6.5h-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenCameraMinimalistic };
export default React.memo(BrokenCameraMinimalistic);
