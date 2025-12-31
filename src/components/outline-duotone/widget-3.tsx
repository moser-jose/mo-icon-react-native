import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWidget3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneWidget3);
