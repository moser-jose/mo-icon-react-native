import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneChefHat: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M18.998 18H5.002c.01 1.397.081 2.912.584 3.414C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586.503-.502.574-2.017.584-3.414"/><path fill="${color}" d="M7 5a5 5 0 0 0-2 9.584V18h14v-3.416a5.001 5.001 0 0 0-2.737-9.53 4.502 4.502 0 0 0-8.526 0A5 5 0 0 0 7 5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneChefHat);
