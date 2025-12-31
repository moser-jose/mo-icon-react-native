import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPills3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 9.472A4.5 4.5 0 0 0 9.682 6.29 4.48 4.48 0 0 0 7 5m4 4.472a4.5 4.5 0 0 1-9 0m9 0H2m0 0A4.5 4.5 0 0 1 3.318 6.29m11.439.831A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Zm2.624 13.784 3.524-3.524a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524A3.738 3.738 0 0 0 14 21.927"/><path stroke="${color}" stroke-width="1.5" d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenPills3);
