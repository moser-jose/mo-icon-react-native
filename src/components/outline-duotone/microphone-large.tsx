import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMicrophoneLarge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 6.5s.473-.5 2-.5 2 .5 2 .5m-4 3s.473-.5 2-.5 2 .5 2 .5m7 1.5v2a9 9 0 1 1-18 0v-2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneMicrophoneLarge };
export default React.memo(OutlineDuotoneMicrophoneLarge);
