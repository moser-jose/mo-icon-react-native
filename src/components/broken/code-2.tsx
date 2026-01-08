import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCode2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m16 11 1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973 0 .89-.771 1.585-2.314 2.973L16 20M8 4.83 6.304 6.357C4.76 7.745 3.99 8.439 3.99 9.33c0 .89.771 1.585 2.314 2.973L8 13.83M13.987 5l-.994 3.707M11.843 13l-1.83 6.83"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenCode2 };
export default React.memo(BrokenCode2);
