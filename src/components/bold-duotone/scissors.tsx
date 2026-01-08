import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneScissors: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6.654 1.633a.75.75 0 1 0-1.308.735L15.704 20.79a3.75 3.75 0 1 0-.136-3.303z" opacity=".5"/><path fill="${color}" d="M17.346 1.633a.75.75 0 1 1 1.308.735L8.296 20.79a3.75 3.75 0 1 1 .136-3.303z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneScissors };
export default React.memo(BoldDuotoneScissors);
