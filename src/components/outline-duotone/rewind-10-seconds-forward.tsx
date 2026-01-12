import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRewind10SecondsForward: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4.5 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-4.1-2.468-7.625-6-9.168" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.5 10.5 2.5-2v7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneRewind10SecondsForward };
export default React.memo(OutlineDuotoneRewind10SecondsForward);
