import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSleepingCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"/><path fill="${color}" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4 3.464-2L19 7.464l3.464-2m-8.416.036 1.732 1-2.732.732 1.732 1"/><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSleepingCircle };
export default React.memo(OutlineDuotoneSleepingCircle);
