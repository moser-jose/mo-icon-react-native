import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUsb: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="20" r="2" stroke="${color}" stroke-width="1.5"/><circle cx="6" cy="6" r="1" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v13m0 0v3-.558a2 2 0 0 1 1.367-1.898l3.265-1.088A2 2 0 0 0 18 12.559V10m-6 5v-.559a2 2 0 0 0-1.367-1.897l-3.265-1.088A2 2 0 0 1 6 9.558V7" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 5-2-3-2 3"/><path stroke="${color}" stroke-width="1.5" d="M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneUsb);
