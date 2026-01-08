import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBonfire: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M18 8.807C18 13.761 13.733 15 11.6 15 9.733 15 6 13.761 6 8.807 6 6.71 7.208 5.358 8.261 4.653c.535-.36 1.223-.101 1.312.523.178 1.245 1.305 2.173 1.987 1.104.582-.914.793-2.148.793-2.891 0-1.1 1.15-1.798 2.048-1.124C16.15 3.577 18 5.776 18 8.807Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 15 4 22"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m4 15 5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBonfire };
export default React.memo(OutlineDuotoneBonfire);
