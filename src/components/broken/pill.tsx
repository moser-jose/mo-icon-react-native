import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPill: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2.6 6a6.796 6.796 0 0 1 11.002-2.01l6.407 6.408A6.77 6.77 0 0 1 21.894 14M2.107 10a6.77 6.77 0 0 0 1.884 3.602l6.407 6.407A6.796 6.796 0 0 0 21.4 18"/><path stroke="${color}" stroke-width="1.5" d="M16.806 7.194s-.541 2.806-3.674 5.939-5.938 3.673-5.938 3.673"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenPill);
