import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBombMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="9.5" cy="14.5" r="7.5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m17 7-2 2" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m19.5 7.5 1 .5M16 3.5l.5 1M19 5l1-1"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBombMinimalistic };
export default React.memo(OutlineDuotoneBombMinimalistic);
