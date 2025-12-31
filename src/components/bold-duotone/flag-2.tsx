import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFlag2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="m13.558 3.874-.413-.166a8.7 8.7 0 0 0-4.924-.452L6.5 3.601v10l1.72-.345a8.7 8.7 0 0 1 4.925.453 8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.336l-1.56-2.6c-.342-.57-.513-.854-.553-1.164a1.5 1.5 0 0 1 0-.389c.04-.31.211-.594.553-1.163l1.278-2.131a.73.73 0 0 0-.803-1.084 7.3 7.3 0 0 1-4.482-.304"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneFlag2);
