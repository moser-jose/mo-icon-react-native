import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTuning2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 7H6M3 7H2m11 10h5m3 0h1M2 17h4M22 7h-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTuning2 };
export default React.memo(BrokenTuning2);
