import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBicyclingRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="14" cy="4" r="2" stroke="${color}" stroke-width="1.5"/><circle cx="6" cy="18" r="3" stroke="${color}" stroke-width="1.5"/><circle cx="18" cy="18" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18.5 10h-3.918c-.377 0-.743-.127-1.038-.362L11.386 7.92a2.638 2.638 0 1 0-2.698 4.481m3.312 5.6.76-1.774a1.89 1.89 0 0 0-.981-2.477"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBicyclingRound);
