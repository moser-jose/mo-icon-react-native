import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundArrowLeftDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" opacity=".5"/><path fill="${color}" d="M13.5 15.75a.75.75 0 0 0 0-1.5h-2.69l4.72-4.72a.75.75 0 0 0-1.06-1.06l-4.72 4.72V10.5a.75.75 0 0 0-1.5 0V15c0 .414.336.75.75.75z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneRoundArrowLeftDown);
