import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRoundGraph: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.97 9.97 0 0 1 3-7.141" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5 12a7 7 0 1 0 7-7" opacity=".7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 16a4 4 0 0 0 0-8"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneRoundGraph);
