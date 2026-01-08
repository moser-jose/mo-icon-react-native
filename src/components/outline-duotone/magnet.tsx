import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMagnet: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 18.5v2a1.5 1.5 0 0 1-1.5 1.5H13C7.477 22 3 17.523 3 12S7.477 2 13 2h6.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H13a5 5 0 0 0 0 10h6.5a1.5 1.5 0 0 1 1.5 1.5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2v5m0 10v5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneMagnet };
export default React.memo(OutlineDuotoneMagnet);
