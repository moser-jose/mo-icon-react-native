import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUserSpeakRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="10" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><ellipse cx="10" cy="17" stroke="${color}" stroke-width="1.5" opacity=".5" rx="7" ry="4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 2s2 1.2 2 4-2 4-2 4m-2-6s1 .6 1 2-1 2-1 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneUserSpeakRounded };
export default React.memo(OutlineDuotoneUserSpeakRounded);
