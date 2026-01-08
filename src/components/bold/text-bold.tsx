import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTextBold: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M7.609 1A3.61 3.61 0 0 0 4 4.609V19.94A3.06 3.06 0 0 0 7.059 23H14a6 6 0 0 0 2.102-11.621A6 6 0 0 0 12 1zM12 11a4 4 0 0 0 0-8H7.609C6.72 3 6 3.72 6 4.609V11zm-6 2v6.941C6 20.526 6.474 21 7.059 21H14a4 4 0 0 0 0-8z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTextBold };
export default React.memo(BoldTextBold);
