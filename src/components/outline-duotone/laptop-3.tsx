import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneLaptop3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414S5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586S20.5 12.886 20.5 11V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneLaptop3 };
export default React.memo(OutlineDuotoneLaptop3);
