import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenLaptopMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 10v4c0 1.886 0 2.828.586 3.414S5.114 18 7 18h10c1.886 0 2.828 0 3.414-.586S21 15.886 21 14V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9c-2.828 0-4.243 0-5.121.879-.49.49-.707 1.146-.803 2.121M22 21h-6M2 21h10m3-6H9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenLaptopMinimalistic };
export default React.memo(BrokenLaptopMinimalistic);
