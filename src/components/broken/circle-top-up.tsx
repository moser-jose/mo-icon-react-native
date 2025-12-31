import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCircleTopUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 11 9-9m0 0h-5.344M22 2v5.344"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenCircleTopUp);
