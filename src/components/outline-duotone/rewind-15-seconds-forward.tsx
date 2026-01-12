import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRewind15SecondsForward: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4.5 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-4.1-2.468-7.625-6-9.168" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.5 10.5 2.5-2v7"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneRewind15SecondsForward };
export default React.memo(OutlineDuotoneRewind15SecondsForward);
