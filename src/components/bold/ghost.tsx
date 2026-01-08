import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldGhost: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M22 19.206V12c0-5.523-4.477-10-10-10S2 6.477 2 12v7.206a1.727 1.727 0 0 0 2.5 1.544 2.89 2.89 0 0 1 2.896.18 2.89 2.89 0 0 0 3.208 0l.353-.234a1.88 1.88 0 0 1 2.086 0l.353.235a2.89 2.89 0 0 0 3.208 0 2.89 2.89 0 0 1 2.897-.18A1.727 1.727 0 0 0 22 19.206M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldGhost };
export default React.memo(BoldGhost);
