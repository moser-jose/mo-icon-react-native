import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneChatRoundVideo: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 12c0-.844-.927-1.414-2.78-2.553-1.88-1.155-2.82-1.732-3.52-1.308S9 9.709 9 12s0 3.437.7 3.861c.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneChatRoundVideo };
export default React.memo(OutlineDuotoneChatRoundVideo);
