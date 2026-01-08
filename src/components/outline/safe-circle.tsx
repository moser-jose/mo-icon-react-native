import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineSafeCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5m-5 4.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25m3.47 1.22a.75.75 0 0 1 1.06 0l1 1q.065.065.11.14c.401-.23.865-.36 1.36-.36s.959.13 1.36.36a1 1 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a1 1 0 0 1-.14.11c.23.401.36.865.36 1.36s-.13.959-.36 1.36q.075.045.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a1 1 0 0 1-.11-.14c-.401.23-.865.36-1.36.36s-.959-.13-1.36-.36a1 1 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a1 1 0 0 1 .14-.11 2.74 2.74 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a1 1 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06M14 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineSafeCircle };
export default React.memo(OutlineSafeCircle);
