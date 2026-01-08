import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenHelp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="m15 9 4-4M5 19l4-4m0-6L5 5m14 14-4-4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.412 2.338a9.95 9.95 0 0 1 5.176.002c5.335 1.43 8.5 6.913 7.071 12.248s-6.912 8.5-12.247 7.07-8.5-6.912-7.071-12.247a9.95 9.95 0 0 1 2.586-4.483"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenHelp };
export default React.memo(BrokenHelp);
