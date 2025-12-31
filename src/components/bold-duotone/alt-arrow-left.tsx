import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneAltArrowLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.596 8.303 8.165 11.63a.5.5 0 0 0 0 .74l6.63 6.43c.414.401 1.205.158 1.205-.37v-5.723z"/><path fill="${color}" d="M16 11.293V5.57c0-.528-.791-.771-1.205-.37l-2.482 2.406z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneAltArrowLeft);
