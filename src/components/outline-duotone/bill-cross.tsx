import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBillCross: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M17.667 2H6.333c-.31 0-.464 0-.594.012-1.45.133-2.6 1.34-2.728 2.861C3 5.01 3 5.173 3 5.497V20.26c0 .872 1.059 1.243 1.558.544a.84.84 0 0 1 1.384 0l.433.606a1.367 1.367 0 0 0 2.25 0 1.367 1.367 0 0 1 2.25 0 1.367 1.367 0 0 0 2.25 0 1.367 1.367 0 0 1 2.25 0 1.367 1.367 0 0 0 2.25 0l.433-.605a.84.84 0 0 1 1.384 0c.5.698 1.558.327 1.558-.545V5.497c0-.324 0-.487-.011-.624-.127-1.521-1.277-2.728-2.727-2.861C18.13 2 17.976 2 17.667 2Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.5 15.5h9M14 8l-4 4m0-4 4 4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBillCross };
export default React.memo(OutlineDuotoneBillCross);
