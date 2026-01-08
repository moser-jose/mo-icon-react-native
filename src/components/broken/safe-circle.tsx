import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSafeCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 8v1m0 7v-4"/><path stroke="${color}" stroke-width="1.5" d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m16 10 1-1m-6 6 1-1m0-4-1-1m6 6-1-1M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSafeCircle };
export default React.memo(BrokenSafeCircle);
