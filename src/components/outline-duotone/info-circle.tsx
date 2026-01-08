import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneInfoCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"/><circle cx="1" cy="1" r="1" fill="${color}" transform="matrix(1 0 0 -1 11 9)"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneInfoCircle };
export default React.memo(OutlineDuotoneInfoCircle);
