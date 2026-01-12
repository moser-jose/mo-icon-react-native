import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTestTubeMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 9.849 14.182 3m.681.685 5.376 5.399L13 16.354l-3.512 3.528a3.79 3.79 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m6.8 11.783 1.275.142a2.205 2.205 0 0 1 1.944 1.953 2.21 2.21 0 0 0 1.32 1.787l1.661.69" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTestTubeMinimalistic };
export default React.memo(OutlineDuotoneTestTubeMinimalistic);
