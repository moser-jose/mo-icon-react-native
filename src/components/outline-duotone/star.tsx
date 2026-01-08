import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneStar: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17.657 6.344 15.96 8.04m-7.92 7.92-1.697 1.696m0-11.313L8.04 8.04m7.92 7.92 1.697 1.697" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneStar };
export default React.memo(OutlineDuotoneStar);
