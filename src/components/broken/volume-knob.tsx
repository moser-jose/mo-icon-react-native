import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenVolumeKnob: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 12a5 5 0 1 0-5 5m0-10v4"/><path fill="${color}" d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414m12.021 12.022a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414m0-10.608a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414M6.697 18.718a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenVolumeKnob);
