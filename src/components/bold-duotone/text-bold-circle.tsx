import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTextBoldCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M9.522 5.25A2.27 2.27 0 0 0 7.25 7.522v9.301c0 1.064.863 1.927 1.926 1.927H13a3.75 3.75 0 0 0 1.665-7.111A3.75 3.75 0 0 0 12 5.25zm2.478 6H8.75V7.522c0-.426.346-.772.772-.772H12a2.25 2.25 0 0 1 0 4.5m-3.25 5.573V12.75H13a2.25 2.25 0 0 1 0 4.5H9.176a.426.426 0 0 1-.426-.427" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneTextBoldCircle);
