import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPinCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7.89-3.581 1.482 1.484c1.006 1.006 1.509 1.51 1.391 2.053s-.783.793-2.115 1.293l-.922.346c-.357.134-.535.201-.673.32q-.09.08-.16.177c-.106.148-.157.332-.258.7-.23.836-.345 1.254-.62 1.41a.76.76 0 0 1-.378.1c-.316 0-.622-.307-1.235-.92l-.473-.473-1.618 1.62a.75.75 0 0 1-1.062-1.059l1.62-1.622-.447-.448c-.609-.61-.913-.914-.915-1.228 0-.135.034-.269.102-.386.156-.271.572-.386 1.402-.615.368-.101.552-.152.7-.259a1 1 0 0 0 .18-.166c.118-.138.184-.318.316-.677l.334-.911c.493-1.347.74-2.02 1.284-2.14s1.051.386 2.064 1.4" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPinCircle };
export default React.memo(BoldPinCircle);
