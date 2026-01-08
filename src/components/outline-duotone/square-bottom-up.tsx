import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSquareBottomUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 21 8-8m0 0H5m6 0v6"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSquareBottomUp };
export default React.memo(OutlineDuotoneSquareBottomUp);
