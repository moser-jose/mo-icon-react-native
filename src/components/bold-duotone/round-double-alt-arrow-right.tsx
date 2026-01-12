import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundDoubleAltArrowRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12" opacity=".5"/><path fill="${color}" d="M9.03 15.53a.75.75 0 0 1-1.06-1.06L10.44 12 7.97 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06z"/><path fill="${color}" d="M13.03 15.53a.75.75 0 1 1-1.06-1.06L14.44 12l-2.47-2.47a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRoundDoubleAltArrowRight };
export default React.memo(BoldDuotoneRoundDoubleAltArrowRight);
