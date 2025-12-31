import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMultipleForwardRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 10.13c1.613-1.153 3.454-1.56 5-1.56V6.227c0-.958 0-1.437.295-1.57.295-.132.653.186 1.37.823l3.971 3.53c1.569 1.395 2.353 2.092 2.353 2.99s-.784 1.596-2.353 2.99l-3.972 3.53c-.716.637-1.074.956-1.37.823C11 19.21 11 18.732 11 17.773v-2.344c-3.6 0-7.5 1.714-9 4.571 0-2.431.377-4.378 1-5.925"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m15.539 4.5 5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenMultipleForwardRight);
