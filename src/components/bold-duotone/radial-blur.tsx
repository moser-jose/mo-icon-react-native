import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRadialBlur: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="${color}" opacity=".5"/><path fill="${color}" d="M15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-4.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.75-3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m4.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m4 4a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m0 4.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m-3.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M9.75 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m-4-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.75 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m3.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneRadialBlur);
