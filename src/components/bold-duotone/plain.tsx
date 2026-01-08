import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePlain: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m16.245 7.76 5.172-5.171-.003-.003c-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 0 1 1.116.005" clip-rule="evenodd"/><path fill="${color}" d="m18.636 15.67 1.716-5.15c1.499-4.495 2.248-6.744 1.065-7.932l-5.172 5.171a.79.79 0 0 1-.005 1.117l-5.417 5.367a1.4 1.4 0 0 0-.324 1.426c1.21 3.631 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.33 2.703-5.962" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePlain };
export default React.memo(BoldDuotonePlain);
