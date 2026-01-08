import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUserCheck: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><circle cx="18" cy="16" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.667 16 .833 1 1.833-1.889"/><path stroke="${color}" stroke-width="1.5" d="M15 13.327A13.6 13.6 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneUserCheck };
export default React.memo(OutlineDuotoneUserCheck);
