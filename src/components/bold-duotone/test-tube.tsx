import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTestTube: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M20 17c1.105 0 2-.933 2-2.083 0-.72-.783-1.68-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.62-1.37 1.58-1.37 2.3 0 1.15.895 2.083 2 2.083m-3.722-6.432 1.505-2.598-8.41-4.826L2.65 14.746a4.827 4.827 0 0 0 1.776 6.606 4.86 4.86 0 0 0 6.629-1.77l1.12-1.932z" opacity=".5"/><path fill="${color}" d="M9.294 1.354a.75.75 0 0 0-.763 1.292l.835.494.006.003 8.41 4.827.844.484a.75.75 0 1 0 .747-1.3l-9.247-5.308zm3.633 14.997-.002-.001-2.612-1.503a.75.75 0 1 0-.748 1.3l2.61 1.502zm1.638-2.826-.002-.002-4.203-2.418a.75.75 0 0 0-.748 1.3l4.2 2.417zm1.711-2.959-2.558-1.472a.75.75 0 0 0-.748 1.3l2.556 1.47z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneTestTube);
