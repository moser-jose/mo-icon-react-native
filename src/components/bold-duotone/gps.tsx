import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneGps: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity=".5"/><path fill="${color}" d="M12 8.512a3.488 3.488 0 1 0 0 6.976 3.488 3.488 0 0 0 0-6.976M12.75 2a.75.75 0 0 0-1.5 0v2.035a8 8 0 0 1 1.5 0zm7.215 10.75a8 8 0 0 0 0-1.5H22a.75.75 0 0 1 0 1.5zm-8.715 7.215a8 8 0 0 0 1.5 0V22a.75.75 0 0 1-1.5 0zM4.035 11.25a8 8 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneGps);
