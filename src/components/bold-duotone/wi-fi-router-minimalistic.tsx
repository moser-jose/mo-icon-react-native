import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWiFiRouterMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16.5 4.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 4.5" clip-rule="evenodd" opacity=".4"/><path fill="${color}" fill-rule="evenodd" d="M16.5 7a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 7" clip-rule="evenodd" opacity=".7"/><path fill="${color}" fill-rule="evenodd" d="M2 15.75c0-1.886 0-2.828.586-3.414S4.114 11.75 6 11.75h12c1.886 0 2.828 0 3.414.586S22 13.864 22 15.75s0 2.828-.586 3.414-1.528.586-3.414.586H6c-1.886 0-2.828 0-3.414-.586S2 17.636 2 15.75m4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/><path fill="${color}" d="M17.25 8.75a.75.75 0 0 0-1.5 0v3h1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneWiFiRouterMinimalistic };
export default React.memo(BoldDuotoneWiFiRouterMinimalistic);
