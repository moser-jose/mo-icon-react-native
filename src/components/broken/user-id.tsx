import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUserId: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="9" cy="9" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172.47.47.751 1.054.92 1.828M19 12h-4m4-3h-5m5 6h-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenUserId);
