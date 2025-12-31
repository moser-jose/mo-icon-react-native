import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCardholder: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M17 11v-1c0-1.886 0-2.828-.586-3.414S14.886 6 13 6h-2c-1.886 0-2.828 0-3.414.586S7 8.114 7 10v1"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5 11h14"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 16h8" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneCardholder);
