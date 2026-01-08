import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTuningSquare2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M10 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/><circle cx="2" cy="2" r="2" stroke="${color}" stroke-width="1.5" transform="matrix(0 -1 -1 0 16 10)"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 16h5m-9-8H5m0 8h1m13-8h-1m4 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTuningSquare2 };
export default React.memo(BrokenTuningSquare2);
