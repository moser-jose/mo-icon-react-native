import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneReel2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5" clip-rule="evenodd"/><path fill="${color}" d="M5.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0m5.5-5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneReel2);
