import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSun2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.285 10.333a5 5 0 1 0 3.049-3.049M12 2v2m0 16v2M4 12H2m20 0h-2m-.222-7.777-2.222 2.031M4.222 4.223l2.222 2.031m0 11.301-2.222 2.222m15.556 0-2.222-2.222"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenSun2);
