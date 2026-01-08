import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneReorder: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 10H5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 14H5m14-8H5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 18H5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneReorder };
export default React.memo(OutlineDuotoneReorder);
