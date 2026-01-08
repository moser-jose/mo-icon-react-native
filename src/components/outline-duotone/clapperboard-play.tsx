import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneClapperboardPlay: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5m-2 12c0-.633-.662-1.06-1.986-1.915-1.342-.866-2.013-1.299-2.514-.98-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896 1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneClapperboardPlay };
export default React.memo(OutlineDuotoneClapperboardPlay);
