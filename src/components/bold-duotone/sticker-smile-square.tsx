import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneStickerSmileSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M20.071 13.01C20.616 13 21.25 13 22 13v-1c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22h1c0-.75 0-1.384.01-1.929.02-1.094.078-1.834.254-2.462l.003-.01.041-.137.007-.02a6.43 6.43 0 0 1 4.127-4.127c.665-.216 1.437-.284 2.63-.305" opacity=".5"/><path fill="${color}" d="m14.88 21.804-.005.001-.061.013h-.002a9 9 0 0 1-1.812.183h-1l.344-.344c.42-.42.655-.99.666-1.585.021-1.192.089-1.964.305-2.63a6.43 6.43 0 0 1 4.127-4.126c.665-.216 1.437-.284 2.63-.305a2.3 2.3 0 0 0 1.585-.666l.343-.343v.999c0 .662-.072 1.307-.207 1.929a9.01 9.01 0 0 1-6.864 6.864zM15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5m-6 0c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5"/><path fill="${color}" d="M13.315 17.442a6.4 6.4 0 0 1 .957-1.852 4.24 4.24 0 0 1-4.825-.192.75.75 0 0 0-.894 1.205 5.77 5.77 0 0 0 4.711 1.006l.003-.01.041-.137z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneStickerSmileSquare };
export default React.memo(BoldDuotoneStickerSmileSquare);
