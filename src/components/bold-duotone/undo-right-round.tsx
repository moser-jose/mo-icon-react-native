import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneUndoRightRound: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L18.94 7l-2.47-2.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/><path fill="${color}" d="M18.19 6.25H9a5.75 5.75 0 0 0 0 11.5h7a.75.75 0 0 0 0-1.5H9a4.25 4.25 0 0 1 0-8.5h9.19l.75-.75z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneUndoRightRound };
export default React.memo(BoldDuotoneUndoRightRound);
