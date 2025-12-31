import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneShare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M9 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.32 16.802 9 13.29m5.42-6.45L9.1 10.352" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M19 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneShare);
