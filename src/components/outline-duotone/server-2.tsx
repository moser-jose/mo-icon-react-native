import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneServer2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 17c0-1.886 0-2.828.586-3.414S4.114 13 6 13h12c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586S2 18.886 2 17ZM2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2h12c1.886 0 2.828 0 3.414.586S22 4.114 22 6s0 2.828-.586 3.414S19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586S2 7.886 2 6Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.5 6H18M6 7V5m3 2V5m4.5 12H18M6 18v-2m3 2v-2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneServer2);
