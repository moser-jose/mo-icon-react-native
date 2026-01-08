import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSkateboarding: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 17 1.204 1.338A2 2 0 0 0 5.691 19H10m11-2-1.204 1.338a2 2 0 0 1-1.487.662H14"/><circle cx="7" cy="21" r="1" fill="${color}"/><circle cx="17" cy="21" r="1" fill="${color}"/><circle cx="19" cy="4" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-1.251l-.001-.166a3 3 0 0 0-1.343-2.422l-.15-.095c-.097-.061-.146-.091-.177-.113a2 2 0 0 1-.184-3.168l.145-.118.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 7.999M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5m5.5-4a8.25 8.25 0 0 0 4 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSkateboarding };
export default React.memo(BrokenSkateboarding);
