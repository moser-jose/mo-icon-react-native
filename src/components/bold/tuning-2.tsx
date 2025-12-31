import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTuning2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6m5-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5.5 2.209a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zm6 10a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM1 16.959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m20.75-10.75a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldTuning2);
