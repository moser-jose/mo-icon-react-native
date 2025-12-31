import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUserBlock: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M15 13.327A13.6 13.6 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5" opacity=".5"/><path stroke="${color}" stroke-linejoin="round" stroke-width="1.5" d="M15.172 18.828a4 4 0 1 0 5.657-5.657m-5.658 5.657a4 4 0 0 1 5.657-5.657m-5.656 5.657 5.656-5.656"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneUserBlock);
