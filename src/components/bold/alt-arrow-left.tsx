import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldAltArrowLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m8.165 11.63 6.63-6.43C15.21 4.799 16 5.042 16 5.57v12.86c0 .528-.79.771-1.205.37l-6.63-6.43a.5.5 0 0 1 0-.74"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldAltArrowLeft };
export default React.memo(BoldAltArrowLeft);
