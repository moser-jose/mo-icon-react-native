import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWind: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 8h2m2-2.143V5.5A2.5 2.5 0 1 1 9.5 8H8m-4 6h1m10 3v.5a3.5 3.5 0 1 0 3.5-3.5H9m-7-3h6m7-3v-.5a3.5 3.5 0 1 1 3.5 3.5h-6.25"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenWind);
