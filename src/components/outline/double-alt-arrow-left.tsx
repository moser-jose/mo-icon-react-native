import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDoubleAltArrowLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17.488 4.43a.75.75 0 0 1 .081 1.058L11.988 12l5.581 6.512a.75.75 0 0 1-1.139.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.058-.081m-4 0a.75.75 0 0 1 .081 1.058L7.988 12l5.581 6.512a.75.75 0 0 1-1.139.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.058-.081" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDoubleAltArrowLeft);
