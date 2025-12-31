import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenScanner2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 13s1.8-2 6-2 6 2 6 2m-8 9c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10m0 4v1m-8 7c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828M2 10V9m8-7C6.229 2 4.343 2 3.172 3.172 2.518 3.825 2.229 4.7 2.102 6"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenScanner2);
