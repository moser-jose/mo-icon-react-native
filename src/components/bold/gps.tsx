import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldGps: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 12c0 .385.312.698.698.698H4.59a7.444 7.444 0 0 0 6.712 6.712v1.892a.698.698 0 0 0 1.396 0V19.41a7.444 7.444 0 0 0 6.712-6.712h1.892a.698.698 0 0 0 0-1.396H19.41a7.444 7.444 0 0 0-6.712-6.712V2.698a.698.698 0 0 0-1.396 0V4.59a7.444 7.444 0 0 0-6.712 6.712H2.698A.7.7 0 0 0 2 12m6.512 0a3.488 3.488 0 1 1 6.976 0 3.488 3.488 0 0 1-6.976 0" clip-rule="evenodd"/><path fill="${color}" d="M9.907 12a2.093 2.093 0 1 1 4.186 0 2.093 2.093 0 0 1-4.186 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldGps);
