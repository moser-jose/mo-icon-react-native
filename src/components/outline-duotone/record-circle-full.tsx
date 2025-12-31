import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRecordCircleFull: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M18.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path stroke="${color}" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M10.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 14.5h8"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneRecordCircleFull);
