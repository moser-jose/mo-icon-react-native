import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneAccessibility: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452a3 3 0 0 0 .476 1.623L15 19"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 12v1.452a3 3 0 0 1-.476 1.623L9 19"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneAccessibility);
