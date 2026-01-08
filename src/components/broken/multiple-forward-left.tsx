import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMultipleForwardLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 10.13c-1.613-1.153-3.455-1.56-5-1.56V6.227c0-.958 0-1.437-.295-1.57-.295-.132-.653.186-1.37.823L7.363 9.01C5.795 10.405 5.011 11.102 5.011 12s.784 1.596 2.352 2.99l3.973 3.53c.716.637 1.074.956 1.369.823s.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571 0-2.431-.377-4.378-1-5.925"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.461 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMultipleForwardLeft };
export default React.memo(BrokenMultipleForwardLeft);
