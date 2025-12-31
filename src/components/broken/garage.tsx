import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenGarage: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 22H2m1 0V11.347a3 3 0 0 1 1.007-2.242M21 22v-6M7.253 6.219l2.754-2.448a3 3 0 0 1 3.986 0l6 5.334A3 3 0 0 1 21 11.347V12M9 18.5h6M6 22v-3m12 3v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586-.472.471-.564 1.174-.582 2.414M10 9h.5M14 9h-1.5M9 15.5h1.5m4.5 0h-2.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenGarage);
