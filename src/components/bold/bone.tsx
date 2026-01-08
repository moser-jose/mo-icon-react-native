import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBone: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22 1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldBone };
export default React.memo(BoldBone);
