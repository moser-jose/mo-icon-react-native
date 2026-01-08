import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenGolf: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.979 21.536C15.513 21.831 13.813 22 12 22c-5.523 0-10-1.567-10-3.5S6.477 15 12 15s10 1.567 10 3.5c0 .548-.36 1.066-1 1.527M12 18V2m0 1.5 5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenGolf };
export default React.memo(BrokenGolf);
