import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRoute: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><g stroke="${color}" stroke-linecap="round" stroke-width="1.5" clip-path="url(#a)"><path d="M19.071 4.93c3.333 3.333 5 5 5 7.07 0 2.072-1.667 3.739-5 7.072s-5 5-7.071 5-3.738-1.667-7.071-5-5-5-5-7.071 1.667-3.738 5-7.071c3.333-3.334 5-5 7.071-5 1.377 0 2.575.737 4.204 2.21"/><path stroke-linejoin="round" d="M16 11.5 13.333 9M16 11.5 13.333 14M16 11.5h-5.333C9.777 11.5 8 12 8 14"/></g><defs><clipPath id="a"><path fill="${color}" d="M0 0h24v24H0z"/></clipPath></defs></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenRoute);
