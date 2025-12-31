import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBanknote: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.75 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"/><path fill="${color}" fill-rule="evenodd" d="M3.778 18.326C4.787 19 6.19 19 9 19h6c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C19.213 5 17.81 5 15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5m-6.5 0a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75M17.75 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldBanknote);
