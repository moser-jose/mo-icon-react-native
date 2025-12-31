import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMap: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3 8.71c0-1.474 0-2.21.393-2.64a1.5 1.5 0 0 1 .497-.36c.532-.236 1.231-.003 2.629.463 1.067.356 1.6.534 2.14.515a3 3 0 0 0 .588-.078c.525-.125.993-.437 1.929-1.06l1.382-.922c1.2-.8 1.799-1.2 2.487-1.291.688-.093 1.372.135 2.739.591l1.165.388c.99.33 1.485.495 1.768.888S21 6.12 21 7.162v8.129c0 1.473 0 2.21-.393 2.64a1.5 1.5 0 0 1-.497.358c-.532.237-1.231.004-2.629-.462-1.067-.356-1.6-.534-2.14-.515a3 3 0 0 0-.588.078c-.525.125-.993.437-1.929 1.06l-1.382.922c-1.2.8-1.799 1.2-2.487 1.291-.688.093-1.372-.135-2.739-.591l-1.165-.388c-.99-.33-1.485-.495-1.768-.888S3 17.88 3 16.838z"/><path stroke="${color}" stroke-width="1.5" d="M9 6.639V20.5M15 3v14" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneMap);
