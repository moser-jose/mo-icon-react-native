import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMagnifer: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0 9.157 9.157 0 0 1 18.313 0" opacity=".5"/><path fill="${color}" d="m17.1 18.122 3.666 3.666a.723.723 0 0 0 1.023-1.022L18.122 17.1a9 9 0 0 1-1.022 1.022"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMagnifer };
export default React.memo(BoldDuotoneMagnifer);
