import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldVideoFrame: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6.25 2.222c-1.223.194-2.101.558-2.786 1.242-.684.685-1.048 1.563-1.242 2.786H6.25zM2.069 7.75c-.059.981-.067 2.134-.069 3.5h4.25v-3.5zm-.069 5c.002 1.366.01 2.519.069 3.5H6.25v-3.5zm.222 5c.194 1.223.558 2.102 1.242 2.785.685.685 1.563 1.05 2.786 1.243V17.75zm5.528 4.181C8.906 22 10.3 22 12 22s3.094 0 4.25-.069V12.75h-8.5zm10-.153c1.223-.194 2.102-.558 2.785-1.242.685-.684 1.05-1.563 1.243-2.786H17.75zm4.181-5.528c.059-.981.067-2.134.069-3.5h-4.25v3.5zm.069-5c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5zm-.222-5c-.194-1.223-.558-2.101-1.242-2.786-.684-.684-1.563-1.048-2.786-1.242V6.25zM16.25 2.069C15.094 2 13.7 2 12 2s-3.094 0-4.25.069v9.181h8.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldVideoFrame };
export default React.memo(BoldVideoFrame);
