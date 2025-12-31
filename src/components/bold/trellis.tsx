import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTrellis: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M20.5 14V6.138c0-.388 0-.582-.018-.715q-.185-1.375-1.537-1.683c-.13-.03-.402-.055-.945-.104-1.002-.091-2.183-.44-3.231-.821C13.275 2.272 12.529 2 12 2s-1.275.272-2.769.815c-1.048.381-2.23.73-3.231.821-.543.05-.814.074-.945.104q-1.351.308-1.537 1.683c-.018.133-.018.327-.018.715V14zm-9.47-7.53a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0m3 1a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0m1 3a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0M3 15h8.25v6H8c-.877 0-1.619 0-2.25-.026V22a.75.75 0 0 1-1.5 0v-1.19c-.58-.125-1.019-.336-1.371-.689-.768-.768-.865-1.946-.877-4.12A.997.997 0 0 1 3 15m3.25 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M16 21h-3.25v-6H21a.997.997 0 0 1 1 1c-.013 2.175-.11 3.353-.877 4.121-.353.353-.791.564-1.372.69V22a.75.75 0 0 1-1.5 0v-1.026C17.619 21 16.877 21 16 21m-1-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldTrellis);
