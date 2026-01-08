import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneHelp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5"/><circle cx="12" cy="12" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="m15 9 4-4M5 19l4-4m0-6L5 5m14 14-4-4" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneHelp };
export default React.memo(OutlineDuotoneHelp);
