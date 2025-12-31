import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldRuble: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13.5 11.25h-2.75V8.2l.001-.198.002-.043a.25.25 0 0 1 .206-.206l.043-.002.198-.001h2.3a1.75 1.75 0 1 1 0 3.5"/><path fill="${color}" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.25 14a.75.75 0 0 1 .75-.75h.25v-.5H9a.75.75 0 0 1 0-1.5h.25V8.162c0-.146 0-.297.022-.436a1.75 1.75 0 0 1 1.454-1.454c.139-.022.29-.022.435-.022H13.5a3.25 3.25 0 0 1 0 6.5h-2.75v.5H12a.75.75 0 0 1 0 1.5h-1.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldRuble);
