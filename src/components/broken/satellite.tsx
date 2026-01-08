import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSatellite: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M20.47 10.92s-1.848-.616-4.31-3.079c-2.463-2.463-3.079-4.31-3.079-4.31"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.47 10.918a5.224 5.224 0 0 1-7.388-7.388m7.388 7.388A5.224 5.224 0 0 0 18 2.145m2.47 8.773L17.646 16M13.082 3.53A5.2 5.2 0 0 1 15 2.31m-1.918 1.22L6.836 7m9.324.84L11 13M2 9.686 5 8.02M14.313 22l2.187-4M5 19l4-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSatellite };
export default React.memo(BrokenSatellite);
