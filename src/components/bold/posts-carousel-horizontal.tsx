import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPostsCarouselHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M5.5 16V8a3 3 0 0 0-3-3 .5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5 3 3 0 0 0 3-3m7-11c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5zm6 3v8a3 3 0 0 0 3 3 .5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5 3 3 0 0 0-3 3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPostsCarouselHorizontal };
export default React.memo(BoldPostsCarouselHorizontal);
