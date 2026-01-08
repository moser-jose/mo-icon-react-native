import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSortFromBottomToTop: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4 8h9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 13h7" opacity=".7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 18h5" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20V4l3 4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSortFromBottomToTop };
export default React.memo(OutlineDuotoneSortFromBottomToTop);
