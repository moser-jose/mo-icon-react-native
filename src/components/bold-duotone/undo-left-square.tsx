import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneUndoLeftSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M9.301 6.915a.75.75 0 0 1-.042 1.06l-.84.775h5.657c.652 0 1.196 0 1.637.044.462.046.89.145 1.28.397.327.211.605.49.816.816.252.39.351.819.397 1.28.044.441.044.985.044 1.637V13c0 .652 0 1.196-.044 1.638-.046.461-.145.89-.397 1.28a2.8 2.8 0 0 1-.816.816c-.39.251-.818.35-1.28.397-.44.043-.985.043-1.637.043H9.5a.75.75 0 1 1 0-1.5h4.539c.699 0 1.168 0 1.526-.036.347-.034.507-.095.614-.164a1.25 1.25 0 0 0 .37-.371c.07-.106.13-.267.165-.613.035-.359.036-.828.036-1.527 0-.7 0-1.169-.036-1.527-.035-.346-.096-.507-.164-.613a1.25 1.25 0 0 0-.371-.371c-.107-.07-.267-.13-.614-.164-.358-.036-.827-.037-1.526-.037h-5.62l.84.776a.75.75 0 1 1-1.018 1.102l-2.25-2.077a.75.75 0 0 1 0-1.102l2.25-2.077a.75.75 0 0 1 1.06.043" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneUndoLeftSquare);
