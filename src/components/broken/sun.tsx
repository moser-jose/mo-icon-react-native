import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSun: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07-.392.393M5.322 18.678l-.393.393m14.141-.001-.392-.393M5.322 5.322l-.393-.393M6.341 10A6 6 0 1 0 10 6.341"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSun };
export default React.memo(BrokenSun);
