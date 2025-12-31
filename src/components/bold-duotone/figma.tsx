import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFigma: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z" opacity=".6"/><path fill="${color}" d="M11.667 8.666H8.333a3.333 3.333 0 1 0 0 6.667h3.334z" opacity=".4"/><path fill="${color}" d="M18.333 12a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0"/><path fill="${color}" d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.333" opacity=".2"/><path fill="${color}" d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z" opacity=".8"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneFigma);
