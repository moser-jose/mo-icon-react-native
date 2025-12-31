import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRestart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><g stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#a)"><path d="M19.729 10.93a8 8 0 1 1-2.072-3.585l.707.706" opacity=".5"/><path d="M14.121 8.05h4.243V3.806"/></g><defs><clipPath id="a"><path fill="${color}" d="M0 0h24v24H0z"/></clipPath></defs></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneRestart);
