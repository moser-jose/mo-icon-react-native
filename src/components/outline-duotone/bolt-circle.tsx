import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBoltCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m9.212 10.173 2.015-1.604c1.303-1.038 1.954-1.556 2.364-1.3s.197 1.05-.229 2.636l-.04.15c-.153.571-.23.857-.095 1.086l.007.012c.14.225.438.305 1.033.465 1.072.287 1.608.43 1.702.804l.004.019c.083.375-.34.712-1.186 1.385l-2.015 1.605c-1.302 1.037-1.953 1.556-2.363 1.3-.41-.257-.197-1.05.228-2.636l.04-.15c.154-.572.23-.858.096-1.086l-.007-.012c-.14-.226-.438-.306-1.033-.465-1.072-.287-1.608-.431-1.702-.804l-.004-.02c-.083-.375.34-.712 1.185-1.385Z"/><path stroke="${color}" stroke-width="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBoltCircle };
export default React.memo(OutlineDuotoneBoltCircle);
