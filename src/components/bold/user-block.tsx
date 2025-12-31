import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldUserBlock: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16.5 15.75a2.75 2.75 0 0 0-2.383 4.123l3.756-3.756a2.74 2.74 0 0 0-1.373-.367m2.42 1.442-3.728 3.728a2.75 2.75 0 0 0 3.728-3.728M12.25 18.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0" clip-rule="evenodd"/><path fill="${color}" d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.705 7.188A5.752 5.752 0 0 0 11.938 22C4 21.99 4 19.979 4 17.5c0-2.485 3.582-4.5 8-4.5.798 0 1.568.066 2.295.188"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldUserBlock);
