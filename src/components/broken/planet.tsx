import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPlanet: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 5.07A8 8 0 1 1 5.07 8"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.83 14.926c-5.428 2.893-10.648 3.927-11.66 2.31-.532-.852.211-2.27 1.83-3.846m13.849-7.2c2.011-.37 3.49-.21 3.98.573.798 1.275-1.26 3.817-4.829 6.253"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenPlanet);
