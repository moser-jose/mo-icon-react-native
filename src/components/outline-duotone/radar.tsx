import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRadar: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 12 5.002 6.337c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898C.91 14.747 4.077 20.23 9.41 21.66c5.336 1.43 10.819-1.737 12.248-7.071C23.09 9.254 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneRadar };
export default React.memo(OutlineDuotoneRadar);
