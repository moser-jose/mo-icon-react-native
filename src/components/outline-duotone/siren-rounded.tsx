import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSirenRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M20 22v-6a8 8 0 1 0-16 0v6" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.29 11.5a4 4 0 0 1 2.21 2.21M2 22h20M12 2v3m9 1-1.5 1.5M3 6l1.5 1.5"/><path stroke="${color}" stroke-width="1.5" d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 19v3" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneSirenRounded);
