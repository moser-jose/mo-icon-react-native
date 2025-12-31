import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCommand: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16 16h3a3 3 0 1 1-3 3zM5 16h3v3a3 3 0 1 1-3-3"/><path fill="${color}" fill-rule="evenodd" d="M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z" clip-rule="evenodd"/><path fill="${color}" d="M16 8H8v8h8z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCommand);
