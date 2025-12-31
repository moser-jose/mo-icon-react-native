import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBag5: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.206 14.97c-.537 2.687-.806 4.03-1.693 4.895q-.247.24-.53.434C16.96 21 15.59 21 12.85 21h-1.7c-2.74 0-4.109 0-5.131-.7a4 4 0 0 1-.53-.435C4.6 19 4.33 17.657 3.793 14.97c-.771-3.856-1.157-5.784-.269-7.15a4 4 0 0 1 .56-.683C5.25 6 7.215 6 11.148 6h1.703c3.932 0 5.898 0 7.064 1.138a4 4 0 0 1 .559.683c.511.786.6 1.76.436 3.179"/><circle cx="15" cy="10" r="1" fill="${color}"/><circle cx="9" cy="10" r="1" fill="${color}"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBag5);
