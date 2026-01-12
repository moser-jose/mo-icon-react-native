import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSafeSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 7v10" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M11 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.5 9.5 18 8m-8 8 1.5-1.5m0-5L10 8m8 8-1.5-1.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSafeSquare };
export default React.memo(OutlineDuotoneSafeSquare);
