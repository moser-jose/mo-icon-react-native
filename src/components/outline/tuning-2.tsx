import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTuning2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M18.25 7a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M14.5 9.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M5.75 17a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0m3.75 2.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" clip-rule="evenodd"/><path fill="${color}" d="M14.25 16.959a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M9 6.209a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm-7.75 10.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M22 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTuning2);
