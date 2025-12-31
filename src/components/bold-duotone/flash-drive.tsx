import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFlashDrive: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M19.83 10.441 18.296 12l-.11.11-.09-.088c-.489-.87-1.445-1.827-2.869-3.25-1.407-1.407-2.358-2.359-3.22-2.853l1.686-1.714C15.14 2.735 15.863 2 16.762 2c.898 0 1.622.735 3.068 2.205C21.277 5.675 22 6.41 22 7.323s-.723 1.648-2.17 3.118" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M2 14.142c0 1.348 1.085 2.433 3.255 4.603S8.509 22 9.857 22s2.434-1.085 4.603-3.255l.767-.767c2.17-2.17 3.255-3.255 3.255-4.603s-1.085-2.433-3.255-4.603-3.254-3.254-4.602-3.254-2.433 1.084-4.603 3.254l-.767.767C3.085 11.71 2 12.794 2 14.142m3.785-.53a.75.75 0 0 0-1.06 1.06l4.602 4.604a.75.75 0 1 0 1.061-1.06zm13.463-6.74a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 0 1-1.061-1.06l.707-.708a.75.75 0 0 1 1.06 0m-2.12-2.121a.75.75 0 0 1 0 1.06l-.708.708a.75.75 0 1 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneFlashDrive);
