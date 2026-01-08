import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneVinyl: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M13.818 3.395a.75.75 0 0 1 .669-.11 9.54 9.54 0 0 1 6.228 6.228.75.75 0 1 1-1.43.45 8.05 8.05 0 0 0-4.273-4.87v7.276a3.381 3.381 0 1 1-1.5-2.81V4a.75.75 0 0 1 .306-.605" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneVinyl };
export default React.memo(BoldDuotoneVinyl);
