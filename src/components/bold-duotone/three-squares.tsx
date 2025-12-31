import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneThreeSquares: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><rect x="12" y="2" fill="${color}" rx="2"/><path fill="${color}" d="M12 7h-1c-1.886 0-2.828 0-3.414.586S7 9.114 7 11v2c0 1.886 0 2.828.586 3.414S9.114 17 11 17h2c1.886 0 2.828 0 3.414-.586S17 14.886 17 13v-1h-1c-1.886 0-2.828 0-3.414-.586S12 9.886 12 8z" opacity=".7"/><path fill="${color}" d="M7 12v1c0 1.886 0 2.828.586 3.414S9.114 17 11 17h1v1c0 1.886 0 2.828-.586 3.414S9.886 22 8 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18v-2c0-1.886 0-2.828.586-3.414S4.114 12 6 12z" opacity=".4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneThreeSquares);
