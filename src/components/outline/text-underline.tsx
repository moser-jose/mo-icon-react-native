import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTextUnderline: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M4.75 3a.75.75 0 0 0-1.5 0v6a8.75 8.75 0 1 0 17.5 0V3a.75.75 0 0 0-1.5 0v6a7.25 7.25 0 1 1-14.5 0zM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTextUnderline);
