import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneAdhesivePlaster: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3.213 9.071a4.142 4.142 0 0 1 5.858-5.858L20.787 14.93a4.142 4.142 0 0 1-5.858 5.858z"/><path stroke="${color}" stroke-width="1.5" d="m12 17.858-2.929 2.929a4.142 4.142 0 0 1-5.858-5.858L6.143 12zm0-11.716 2.929-2.929a4.142 4.142 0 0 1 5.858 5.858L17.857 12z" opacity=".5"/><path fill="${color}" d="M15.841 12.872a.788.788 0 1 1-1.113 1.114.788.788 0 0 1 1.113-1.114M12.129 9.16a.788.788 0 1 0-1.114 1.113.788.788 0 0 0 1.114-1.114m1.856 5.569a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.114m-3.712-3.712a.788.788 0 1 0-1.114 1.114.788.788 0 0 0 1.114-1.114m6.497 4.64a.788.788 0 1 1-1.114 1.113.788.788 0 0 1 1.114-1.113M9.345 8.23A.788.788 0 1 0 8.23 9.345a.788.788 0 0 0 1.114-1.113"/><path fill="${color}" d="M13.057 11.944a.787.787 0 1 1-1.113 1.113.787.787 0 0 1 1.113-1.113" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneAdhesivePlaster);
