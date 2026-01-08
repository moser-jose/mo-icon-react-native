import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBanknote: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M9 19c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C2 16.213 2 14.81 2 12s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C22 7.787 22 9.19 22 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C19.213 19 17.81 19 15 19z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5.5 15V9m13 6V9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBanknote };
export default React.memo(OutlineDuotoneBanknote);
