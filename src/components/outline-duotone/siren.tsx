import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSiren: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16v6" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h20M12 2v3m9 0-1.5 1.5M3 5l1.5 1.5"/><path stroke="${color}" stroke-width="1.5" d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 19v3" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSiren };
export default React.memo(OutlineDuotoneSiren);
