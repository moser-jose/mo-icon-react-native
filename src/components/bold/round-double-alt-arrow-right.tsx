import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldRoundDoubleAltArrowRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.97-3.53a.75.75 0 1 0-1.06 1.06L14.44 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zm-5.06 0a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L10.44 12 7.97 9.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldRoundDoubleAltArrowRight };
export default React.memo(BoldRoundDoubleAltArrowRight);
