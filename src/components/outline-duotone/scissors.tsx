import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneScissors: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.401 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.599 20.5 18 2M2 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneScissors };
export default React.memo(OutlineDuotoneScissors);
