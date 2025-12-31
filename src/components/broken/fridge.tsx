import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenFridge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4 10v3c0 3.771 0 5.657 1.172 6.828S8.229 21 12 21s5.657 0 6.828-1.172S20 16.771 20 13v-3c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2 6.343 2 5.172 3.172C4.518 3.825 4.229 4.7 4.102 6"/><path stroke="${color}" stroke-linejoin="round" stroke-width="1.5" d="M17 21v1h-1v-1m-8 0v1H7v-1"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 11.5h-5m-11 0h7M17 7v2m0 5v2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenFridge);
