import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMapPointWave: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5.875 12.573C5.308 11.25 5 9.84 5 8.515 5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0c-1.113-.476-2.099-1.225-2.925-2.14"/><path stroke="${color}" stroke-width="1.5" d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.96 15.5c.666.602 1.04 1.282 1.04 2 0 .925-.62 1.785-1.684 2.5M3.04 15.5c-.666.602-1.04 1.282-1.04 2C2 19.985 6.477 22 12 22c1.653 0 3.212-.18 4.586-.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMapPointWave };
export default React.memo(BrokenMapPointWave);
