import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineVolumeKnob: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.25 7.816a4.251 4.251 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd"/><path fill="${color}" d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415m12.021 12.021a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineVolumeKnob);
