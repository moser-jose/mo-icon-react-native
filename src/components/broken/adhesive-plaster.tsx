import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAdhesivePlaster: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.5 7.642 9.071 3.213a4.142 4.142 0 0 0-5.858 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858l-4.358-4.358"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m12 17.858-2.929 2.929A4.142 4.142 0 0 1 2.596 20m3.546-8-2.929 2.929c-.322.322-.58.685-.774 1.071M12 6.142l2.929-2.929a4.142 4.142 0 1 1 5.858 5.858L17.857 12"/><path fill="${color}" d="M15.841 12.871a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.114m-3.712-3.712a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114m4.641 6.497a.787.787 0 1 1-1.114 1.114.787.787 0 0 1 1.114-1.114M9.345 8.23A.788.788 0 1 0 8.23 9.346.788.788 0 0 0 9.345 8.23m3.712 3.713a.787.787 0 1 1-1.113 1.114.787.787 0 0 1 1.113-1.114m.928 2.785a.788.788 0 1 1-1.114 1.113.788.788 0 0 1 1.114-1.113m-3.712-3.713a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenAdhesivePlaster };
export default React.memo(BrokenAdhesivePlaster);
