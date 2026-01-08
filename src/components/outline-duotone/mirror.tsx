import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMirror: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5 9.5V19a3 3 0 0 1-.6 1.8L3.5 22M19 9.5V19a3 3 0 0 0 .6 1.8l.9 1.2"/><path stroke="${color}" stroke-width="1.5" d="M18 9.5c0 4.142-2.686 7.5-6 7.5s-6-3.358-6-7.5S8.686 2 12 2s6 3.358 6 7.5Z"/><path stroke="${color}" stroke-width="1.5" d="M5 20h14" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 5.256c.96.51 1.697 1.732 1.926 3.244" opacity=".4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneMirror };
export default React.memo(OutlineDuotoneMirror);
