import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePostsCarouselVertical: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8 5.5h8a3 3 0 0 0 3-3 .5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5 3 3 0 0 0 3 3m8 13H8a3 3 0 0 0-3 3 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3" opacity=".5"/><path fill="${color}" d="M5 11.5c0-1.886 0-2.828.586-3.414S7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586S19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414S16.886 16.5 15 16.5H9c-1.886 0-2.828 0-3.414-.586S5 14.386 5 12.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotonePostsCarouselVertical);
