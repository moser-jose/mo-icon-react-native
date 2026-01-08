import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneStars: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7.453 2.713c.375-.95 1.72-.95 2.094 0l1.162 2.944c.114.29.344.52.634.634l2.944 1.162c.95.375.95 1.72 0 2.094l-2.944 1.162c-.29.114-.52.344-.634.634l-1.162 2.944c-.375.95-1.72.95-2.094 0L6.29 11.343a1.13 1.13 0 0 0-.634-.634L2.713 9.547c-.95-.375-.95-1.72 0-2.094L5.657 6.29c.29-.114.52-.344.634-.634z"/><path fill="${color}" d="M16.925 13.392a.619.619 0 0 1 1.15 0l.901 2.283a.62.62 0 0 0 .349.349l2.283.9a.619.619 0 0 1 0 1.152l-2.283.9a.62.62 0 0 0-.349.349l-.9 2.283a.619.619 0 0 1-1.152 0l-.9-2.283a.62.62 0 0 0-.349-.349l-2.283-.9a.619.619 0 0 1 0-1.152l2.283-.9a.62.62 0 0 0 .349-.349z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneStars };
export default React.memo(BoldDuotoneStars);
