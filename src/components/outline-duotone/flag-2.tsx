import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneFlag2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5 22V2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m5 14 2.47-.494a8.7 8.7 0 0 1 4.925.453 8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.336l-1.56-2.6c-.342-.57-.513-.854-.553-1.164a1.5 1.5 0 0 1 0-.389c.04-.31.211-.594.553-1.163l1.278-2.131a.73.73 0 0 0-.803-1.084 7.3 7.3 0 0 1-4.482-.304l-.413-.165a8.7 8.7 0 0 0-4.924-.453L5 4.001" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneFlag2);
