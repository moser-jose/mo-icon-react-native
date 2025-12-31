import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRugby: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.457 2.11c-2.883.277-5.948 1.142-8.076 3.27-2.13 2.13-2.994 5.194-3.271 8.077M13.457 2.11c1.67-.16 3.28-.125 4.612-.023a4.136 4.136 0 0 1 3.844 3.844 27 27 0 0 1-.023 4.612M13.457 2.11l8.433 8.433m0 0c-.277 2.883-1.142 5.948-3.27 8.076-2.13 2.13-5.194 2.994-8.077 3.271m0 0c-1.67.16-3.28.125-4.612.023a4.136 4.136 0 0 1-3.844-3.844 27 27 0 0 1 .023-4.612m8.433 8.433L2.11 13.457"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m15.31 8.691-6.62 6.62m0-2.837 2.837 2.837m-.945-4.728 2.836 2.836m-.945-4.728 2.837 2.837" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneRugby);
