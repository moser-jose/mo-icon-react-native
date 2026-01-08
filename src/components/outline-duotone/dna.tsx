import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneDna: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m11.848 12.152.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152.191.558c1.048 3.041.046 6.705-2.539 9.29"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m6.765 11.844 5.078 5.078m.001-10.157 5.078 5.078M4 13l3.5 3.5m12.278-5.61-3.5-3.5M9.305 18.191l1.587 1.587m3.695-14.191L13 4" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneDna };
export default React.memo(OutlineDuotoneDna);
