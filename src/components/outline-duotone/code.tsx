import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCode: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m17 7.83 1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973 0 .89-.771 1.585-2.314 2.973L17 16.83"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m13.987 5-3.974 14.83" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 7.83 5.304 9.357C3.76 10.745 2.99 11.439 2.99 12.33c0 .89.771 1.585 2.314 2.973L7 16.83"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneCode);
