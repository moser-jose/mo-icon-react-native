import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundDoubleAltArrowLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10" opacity=".5"/><path fill="${color}" d="M14.97 15.53a.75.75 0 1 0 1.06-1.06L13.56 12l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06z"/><path fill="${color}" d="M10.97 15.53a.75.75 0 1 0 1.06-1.06L9.56 12l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRoundDoubleAltArrowLeft };
export default React.memo(BoldDuotoneRoundDoubleAltArrowLeft);
