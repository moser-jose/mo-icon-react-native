import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundSortHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="M13.755 11.445a.75.75 0 1 0-1.01 1.11l1.315 1.195H8a.75.75 0 0 0 0 1.5h6.06l-1.315 1.195a.75.75 0 1 0 1.01 1.11l2.75-2.5a.75.75 0 0 0 0-1.11z"/><path fill="${color}" d="M11.255 7.555a.75.75 0 1 0-1.01-1.11l-2.75 2.5a.75.75 0 0 0 0 1.11l2.75 2.5a.75.75 0 0 0 1.01-1.11L9.94 10.25H16a.75.75 0 0 0 0-1.5H9.94z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneRoundSortHorizontal);
