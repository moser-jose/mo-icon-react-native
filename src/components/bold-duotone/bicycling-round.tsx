import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBicyclingRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="${color}" fill-rule="evenodd" d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.379-.59l.76-1.775a1.14 1.14 0 0 0-.591-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.158 1.719a.92.92 0 0 0 .571.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.4 2.4 0 0 1-1.505-.526z" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-12-1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBicyclingRound);
