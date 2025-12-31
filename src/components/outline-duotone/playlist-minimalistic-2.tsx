import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePlaylistMinimalistic2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 6H3m10 4H3m6 4H3m5 4H3" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 16.5V8"/><circle cx="14.5" cy="16.5" r="2.5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 12a4 4 0 0 1-4-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotonePlaylistMinimalistic2);
