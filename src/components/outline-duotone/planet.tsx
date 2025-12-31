import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePlanet: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/><path stroke="${color}" stroke-width="1.5" d="M17.849 6.19c2.011-.37 3.49-.21 3.98.573 1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.533-.852.21-2.27 1.829-3.846" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotonePlanet);
