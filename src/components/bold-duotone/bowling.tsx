import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBowling: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4-2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBowling);
