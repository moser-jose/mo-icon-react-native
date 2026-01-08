import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPieChart2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6.222 4.6a9.5 9.5 0 0 1 1.395-.77c1.372-.615 2.058-.922 2.97-.331s.913 1.56.913 3.5v1.5c0 1.886 0 2.829.586 3.415s1.528.585 3.414.585H17c1.94 0 2.91 0 3.5.913.592.913.285 1.598-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601"/><path fill="${color}" d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPieChart2 };
export default React.memo(BoldPieChart2);
