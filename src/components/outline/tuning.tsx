import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTuning: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.959 9.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75"/><path fill="${color}" fill-rule="evenodd" d="M7 5.75a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M9.25 9.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0M17 18.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5m2.25-3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0" clip-rule="evenodd"/><path fill="${color}" d="M6.209 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0zm10.75 7.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M6.209 2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTuning);
