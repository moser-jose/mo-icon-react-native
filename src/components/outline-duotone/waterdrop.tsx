import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWaterdrop: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneWaterdrop);
