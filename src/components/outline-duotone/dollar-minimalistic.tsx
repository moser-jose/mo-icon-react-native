import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneDollarMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5 3 1.12 3 2.5-1.343 2.5-3 2.5-3-1.12-3-2.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneDollarMinimalistic };
export default React.memo(OutlineDuotoneDollarMinimalistic);
