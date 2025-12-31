import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldMagnet: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.25 2H13C7.477 2 3 6.477 3 12s4.477 10 10 10h3.25v-5H13a5 5 0 0 1 0-10h3.25zm1.5 5h1.75A1.5 1.5 0 0 0 21 5.5v-2A1.5 1.5 0 0 0 19.5 2h-1.75zm0 10v5h1.75a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldMagnet);
