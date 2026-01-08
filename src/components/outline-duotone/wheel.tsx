import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWheel: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5"/><circle cx="12" cy="12" r="6" stroke="${color}" stroke-width="1.5"/><circle cx="12" cy="12" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 12h4m4 0h4m-9 5.196 2-3.464m2-3.463 2-3.465m0 10.392-2-3.464m-2-3.464L9 6.803" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneWheel };
export default React.memo(OutlineDuotoneWheel);
