import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWidget3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneWidget3);
