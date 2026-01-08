import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMicrophoneLarge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 8v5a6 6 0 0 1-12 0V8a6 6 0 0 1 10.472-4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 6.5s.473-.5 2-.5 2 .5 2 .5m-4 3s.473-.5 2-.5 2 .5 2 .5m7 1.5v2a9 9 0 0 1-5 8.064M3 11v2a9 9 0 0 0 9 9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMicrophoneLarge };
export default React.memo(BrokenMicrophoneLarge);
