import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHeart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.106 18.247C5.298 16.084 2 13.542 2 9.137 2 4.274 7.5.826 12 5.501v15c-1 0-2-.771-3.038-1.59q-.417-.328-.856-.664" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M15.038 18.911C17.981 16.591 22 14.001 22 9.137S16.5.826 12 5.501v15c1 0 2-.771 3.038-1.59"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneHeart };
export default React.memo(BoldDuotoneHeart);
