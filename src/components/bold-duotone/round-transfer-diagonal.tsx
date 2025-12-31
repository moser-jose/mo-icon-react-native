import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundTransferDiagonal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12c0 5.523 4.477 10 10 10a9.95 9.95 0 0 0 5.075-1.382l.007-.004q.654-.386 1.238-.864A9.98 9.98 0 0 0 22 12c0-5.523-4.477-10-10-10a9.95 9.95 0 0 0-6.324 2.253A9.98 9.98 0 0 0 2 12" opacity=".5"/><path fill="${color}" d="M13.129 7.5v2.588L6.917 3.387q-.654.388-1.241.867l7.653 8.256a.75.75 0 0 0 1.3-.51V7.5a.75.75 0 1 0-1.5 0m-2.709 3.982A.75.75 0 0 0 9.13 12v4.5a.75.75 0 0 0 1.5 0v-2.629l6.446 6.748q.658-.39 1.245-.869z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneRoundTransferDiagonal);
