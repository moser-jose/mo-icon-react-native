import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBowling: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-2.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldBowling);
