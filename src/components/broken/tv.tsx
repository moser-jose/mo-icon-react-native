import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTv: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 14v2c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-4c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6H8c-2.828 0-4.243 0-5.121.879-.642.641-.815 1.568-.862 3.121M9 2l3 3.5L15 2m1 4v4m0 12v-8"/><path fill="${color}" d="M20 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTv };
export default React.memo(BrokenTv);
