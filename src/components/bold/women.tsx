import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldWomen: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.75 15.96a7.001 7.001 0 1 0-1.5 0v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 1 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldWomen };
export default React.memo(BoldWomen);
