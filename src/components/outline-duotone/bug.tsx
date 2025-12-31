import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBug: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M19 15v-3.062A3.94 3.94 0 0 0 15.063 8H8.936A3.94 3.94 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z"/><path stroke="${color}" stroke-width="1.5" d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 14h3M5 14H2M14.5 3.5 17 2M9.5 3.5 7 2m13.5 18-2-.8m2-11.2-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneBug);
