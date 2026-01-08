import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenStickerCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10 0 .648-.3 1.25-.758 1.708l-7.534 7.534C13.25 21.7 12.648 22 12 22 6.477 22 2 17.523 2 12c0-1.821.487-3.53 1.338-5"/><path stroke="${color}" stroke-width="1.5" d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenStickerCircle };
export default React.memo(BrokenStickerCircle);
