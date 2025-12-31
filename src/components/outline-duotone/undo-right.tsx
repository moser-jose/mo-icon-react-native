import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUndoRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4 3 3-3 3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 7H9c-1.87 0-2.804 0-3.5.402A3 3 0 0 0 4.402 8.5C4 9.196 4 10.13 4 12s0 2.804.402 3.5A3 3 0 0 0 5.5 16.598C6.196 17 7.13 17 9 17h7" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneUndoRight);
