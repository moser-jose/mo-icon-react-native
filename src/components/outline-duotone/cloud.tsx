import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCloud: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.381 9.026a5.8 5.8 0 0 1 1.905-.32c.654 0 1.283.108 1.87.308C20.392 9.78 22 11.88 22 14.352 22 17.471 19.442 20 16.286 20h-10C3.919 20 2 18.103 2 15.764s1.919-4.235 4.286-4.235q.427 0 .83.08a4.3 4.3 0 0 1 1.55.633"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.116 11.609a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCloud };
export default React.memo(OutlineDuotoneCloud);
