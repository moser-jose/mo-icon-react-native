import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenDocument: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828M8 14h5m-5-4h1m7 0h-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenDocument);
