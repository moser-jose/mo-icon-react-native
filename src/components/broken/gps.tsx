import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenGps: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12.5 14.959q-.245.04-.5.041a3 3 0 1 1 2.959-2.5M2 12h2m16 0h2M12 4V2m0 20v-2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 5.07A8 8 0 1 1 5.07 8"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenGps);
