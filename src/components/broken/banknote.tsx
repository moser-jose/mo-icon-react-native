import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBanknote: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104c.347.232.74.384 1.222.484M9 19h6c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104c-.347-.232-.74-.384-1.222-.484"/><path stroke="${color}" stroke-width="1.5" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18.5 15v-1m0-5v2.5M5.5 9v1m0 5v-2.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBanknote);
