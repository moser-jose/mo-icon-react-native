import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneChecklist: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 5.5 3.214 7 7.5 3"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.5 3.214 14 7.5 10" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 19.5 3.214 21 7.5 17"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 19H12"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12H12" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 5H12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneChecklist);
