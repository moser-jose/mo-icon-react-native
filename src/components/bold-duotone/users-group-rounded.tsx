import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneUsersGroupRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="15" cy="6" r="3" fill="${color}" opacity=".4"/><ellipse cx="16" cy="17" fill="${color}" opacity=".4" rx="5" ry="3"/><circle cx="9.001" cy="6" r="4" fill="${color}"/><ellipse cx="9.001" cy="17.001" fill="${color}" rx="7" ry="4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneUsersGroupRounded);
