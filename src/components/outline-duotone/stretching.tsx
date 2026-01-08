import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneStretching: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="14.5" cy="4.5" r="2.5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.976v-2.62a1.5 1.5 0 0 0-2.091-1.38L8.342 10.95a1.5 1.5 0 0 0-.456 2.453L8.5 14" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneStretching };
export default React.memo(OutlineDuotoneStretching);
