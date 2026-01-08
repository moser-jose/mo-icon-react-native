import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBasketball: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.95 20.574s-.94-6.591-2.95-10.073-6.95-7.073-6.95-7.073"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.238M16.414 3.21c-1.488 4.42-8.74 9.303-14.125 8.243"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBasketball };
export default React.memo(BrokenBasketball);
