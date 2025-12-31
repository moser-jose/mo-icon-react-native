import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAccessibility: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenAccessibility);
