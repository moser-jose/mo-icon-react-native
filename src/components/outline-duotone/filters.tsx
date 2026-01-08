import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneFilters: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"/><path stroke="${color}" stroke-width="1.5" d="M6.5 10.189a6 6 0 1 0 7.106 3.669"/><path stroke="${color}" stroke-width="1.5" d="M12 20.472a6 6 0 1 0 5.5-10.283" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneFilters };
export default React.memo(OutlineDuotoneFilters);
