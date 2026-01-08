import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCircleTopUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 11 9-9m0 0h-5.344M22 2v5.344"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCircleTopUp };
export default React.memo(OutlineDuotoneCircleTopUp);
