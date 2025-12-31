import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWomen: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="9" r="7" fill="${color}" opacity=".5"/><path fill="${color}" d="M11.25 15.96v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 1 0 1.5 0v-2.75h1.75a.75.75 0 1 0 0-1.5h-1.75v-1.79a7 7 0 0 1-1.5 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneWomen);
