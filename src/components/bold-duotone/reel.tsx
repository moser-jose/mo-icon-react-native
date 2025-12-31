import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneReel: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M16.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m4.5-4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneReel);
