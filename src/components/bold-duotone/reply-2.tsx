import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneReply2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.03 17.53a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L5.56 12l4.47 4.47a.75.75 0 0 1 0 1.06" clip-rule="evenodd"/><path fill="${color}" d="M6.31 12.75h8.19c.953 0 2.367-.28 3.563-1.141 1.235-.89 2.187-2.365 2.187-4.609a.75.75 0 0 0-1.5 0c0 1.756-.715 2.78-1.563 3.391-.887.639-1.974.859-2.687.859H6.31l-.75.75zm-2.503-.463" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneReply2 };
export default React.memo(BoldDuotoneReply2);
