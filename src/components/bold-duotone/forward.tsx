import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneForward: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L18.44 12l-4.47-4.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/><path fill="${color}" d="M17.69 11.25H9.5c-.953 0-2.367.28-3.563 1.141-1.235.89-2.187 2.365-2.187 4.609a.75.75 0 0 0 1.5 0c0-1.756.715-2.78 1.563-3.391.887-.639 1.974-.859 2.687-.859h8.19l.75-.75zm2.503.463" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneForward);
