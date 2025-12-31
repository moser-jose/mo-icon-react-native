import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBedsideTable: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5"/><path fill="${color}" d="M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 14h12m8 0h-4M2 8h20m-8-6c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBedsideTable);
