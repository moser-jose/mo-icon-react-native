import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTextItalic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M14.977 1H9a1 1 0 0 0 0 2h4.656l-5.4 18H3a1 1 0 1 0 0 2h12a1 1 0 0 0 0-2h-4.656l5.4-18H21a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTextItalic };
export default React.memo(BoldTextItalic);
