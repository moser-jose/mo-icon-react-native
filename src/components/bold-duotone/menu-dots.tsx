import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMenuDots: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="${color}" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMenuDots };
export default React.memo(BoldDuotoneMenuDots);
