import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneEndCallRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m6.947 16.517-1.34.38C3.782 17.415 2 15.91 2 13.85c0-1.237.277-2.477 1.083-3.347C4.128 9.376 6 7.908 9 7.292v6.326c0 1.365-.844 2.556-2.053 2.9m8.053-2.9c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.872 9.376 18 7.908 15 7.292z" clip-rule="evenodd"/><path fill="${color}" d="M9 13.619s0-1.655 3-1.655 3 1.654 3 1.654V7.292A15 15 0 0 0 12 7c-1.106 0-2.103.108-3 .292z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneEndCallRounded };
export default React.memo(BoldDuotoneEndCallRounded);
