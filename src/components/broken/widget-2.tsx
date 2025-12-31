import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWidget2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2.668 5.35A4 4 0 1 0 5.35 2.668M21.832 19.15a4 4 0 1 0-2.682 2.682"/><path stroke="${color}" stroke-width="1.5" d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Zm11-11c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenWidget2);
