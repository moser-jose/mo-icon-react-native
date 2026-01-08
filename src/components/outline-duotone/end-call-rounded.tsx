import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneEndCallRounded: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3.083 10.503C2.277 11.373 2 12.613 2 13.85c0 2.06 1.782 3.565 3.607 3.047l1.34-.38C8.156 16.174 9 14.982 9 13.618m11.917-3.115c.806.87 1.083 2.11 1.083 3.347 0 2.06-1.782 3.565-3.607 3.047l-1.34-.38C15.844 16.174 15 14.982 15 13.618"/><path stroke="${color}" stroke-width="1.5" d="M3.083 10.503C4.44 9.04 7.193 7 12 7s7.56 2.039 8.917 3.503M9 13.619s0-1.655 3-1.655 3 1.654 3 1.654" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneEndCallRounded };
export default React.memo(OutlineDuotoneEndCallRounded);
