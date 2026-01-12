import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneDatabase: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4 18V6m16 0v12"/><path stroke="${color}" stroke-width="1.5" d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Z"/><path stroke="${color}" stroke-width="1.5" d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneDatabase };
export default React.memo(OutlineDuotoneDatabase);
