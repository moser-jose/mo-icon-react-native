import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCartLarge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 9H8M2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h2m6 0h-2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5 6h3m-2.5 7h10.522c.96 0 1.439 0 1.815-.248s.564-.688.942-1.57l.429-1c.81-1.89 1.214-2.833.77-3.508C19.533 6 18.505 6 16.45 6H12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenCartLarge };
export default React.memo(BrokenCartLarge);
