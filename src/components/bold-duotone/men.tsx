import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMen: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="10" cy="14" r="8" fill="${color}" opacity=".5"/><path fill="${color}" d="M17 1.25a.75.75 0 0 0 0 1.5h3.19l-5.088 5.088q.58.48 1.06 1.06l5.088-5.087V7a.75.75 0 0 0 1.5 0V2.25a1 1 0 0 0-1-1z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMen };
export default React.memo(BoldDuotoneMen);
