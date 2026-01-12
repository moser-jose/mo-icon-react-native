import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneStethoscope: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="19" cy="16" r="3" fill="${color}"/><path fill="${color}" d="M12 1.25a.75.75 0 0 1 .75.75v.251a3.75 3.75 0 0 1 3.7 3.418c.014.166.014.354.014.629V7.52A7.464 7.464 0 0 1 9 14.985a7.75 7.75 0 0 1-7.75-7.75v-.937c0-.275 0-.463.015-.628A3.75 3.75 0 0 1 4.67 2.265a7 7 0 0 1 .58-.015V2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25c-.263 0-.366.001-.448.009a2.25 2.25 0 0 0-2.043 2.043c-.008.09-.009.206-.009.535v.898A6.25 6.25 0 0 0 9 13.485a5.964 5.964 0 0 0 5.964-5.964V6.337c0-.329 0-.445-.008-.535a2.25 2.25 0 0 0-2.206-2.05V4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"/><path fill="${color}" d="M8.25 14.95V17A5.75 5.75 0 0 0 14 22.75h.882a4.87 4.87 0 0 0 4.23-2.458c.247-.432.37-.896.43-1.34a3 3 0 0 1-1.5-.108 2.1 2.1 0 0 1-.232.705 3.37 3.37 0 0 1-2.928 1.701H14A4.25 4.25 0 0 1 9.75 17v-2.052a7.5 7.5 0 0 1-1.5.002" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneStethoscope };
export default React.memo(BoldDuotoneStethoscope);
