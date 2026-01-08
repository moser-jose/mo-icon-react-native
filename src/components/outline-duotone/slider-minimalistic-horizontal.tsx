import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSliderMinimalisticHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4.5 3h15m-15 18h15" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSliderMinimalisticHorizontal };
export default React.memo(OutlineDuotoneSliderMinimalisticHorizontal);
