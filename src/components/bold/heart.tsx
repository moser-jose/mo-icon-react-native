import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldHeart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 9.137C2 14 6.02 16.592 8.962 18.911 10 19.73 11 20.501 12 20.501s2-.771 3.038-1.59C17.981 16.591 22 14.001 22 9.137S16.5.826 12 5.501C7.5.826 2 4.274 2 9.137"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldHeart);
