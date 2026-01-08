import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUndoRightRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7H9a5 5 0 0 0 0 10M20 7l-3-3m3 3-3 3m-1 7h-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenUndoRightRound };
export default React.memo(BrokenUndoRightRound);
