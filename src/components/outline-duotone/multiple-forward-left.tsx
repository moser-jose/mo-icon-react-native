import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMultipleForwardLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.336 5.479-3.973 3.53C5.795 10.405 5.01 11.102 5.01 12s.785 1.596 2.353 2.99l3.973 3.53c.716.637 1.074.956 1.369.823s.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571 0-9.142-5.333-11.428-9-11.428V6.226c0-.958 0-1.437-.295-1.57-.295-.132-.653.186-1.37.823"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.461 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneMultipleForwardLeft);
