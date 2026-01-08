import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundAltArrowDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" opacity=".5"/><path fill="${color}" d="M15.53 11.03a.75.75 0 1 0-1.06-1.06L12 12.44 9.53 9.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRoundAltArrowDown };
export default React.memo(BoldDuotoneRoundAltArrowDown);
