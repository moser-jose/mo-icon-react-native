import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneStickerSmileCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0 5.523 4.477 10 10 10 .648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934a8.1 8.1 0 0 0 3.356.1"/><ellipse cx="14.509" cy="9.774" fill="${color}" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"/><ellipse cx="8.714" cy="11.327" fill="${color}" rx="1" ry="1.5" transform="rotate(-15 8.714 11.327)"/><path stroke="${color}" stroke-width="1.5" d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneStickerSmileCircle);
