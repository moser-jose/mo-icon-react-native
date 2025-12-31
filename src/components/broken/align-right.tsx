import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAlignRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 14V2m0 20v-4M11 5H5.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C3 6.098 3 6.565 3 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C4.098 10 4.565 10 5.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C17 8.902 17 8.435 17 7.5s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.28-.161-.636-.193-1.25-.2"/><path stroke="${color}" stroke-width="1.5" d="M17 16.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C6 15.098 6 15.565 6 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C7.098 19 7.565 19 8.5 19h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenAlignRight);
