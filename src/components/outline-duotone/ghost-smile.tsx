import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneGhostSmile: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1"/><ellipse cx="15" cy="9.5" fill="${color}" rx="1" ry="1.5"/><ellipse cx="9" cy="9.5" fill="${color}" rx="1" ry="1.5"/><path stroke="${color}" stroke-width="1.5" d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186 2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0 2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneGhostSmile };
export default React.memo(OutlineDuotoneGhostSmile);
