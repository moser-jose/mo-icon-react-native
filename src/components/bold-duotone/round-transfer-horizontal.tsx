import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundTransferHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="M10.93 7.565a.75.75 0 1 0-.986-1.13l-3.437 3A.75.75 0 0 0 7 10.75h10a.75.75 0 0 0 0-1.5H9zM7 14.75h8l-1.93 1.685a.75.75 0 0 0 .986 1.13l3.437-3A.75.75 0 0 0 17 13.25H7a.75.75 0 0 0 0 1.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRoundTransferHorizontal };
export default React.memo(BoldDuotoneRoundTransferHorizontal);
