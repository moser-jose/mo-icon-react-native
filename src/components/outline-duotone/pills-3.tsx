import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePills3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z"/><path stroke="${color}" stroke-width="1.5" d="M14 14s.281 1.46 1.911 3.09S19 19 19 19" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotonePills3);
