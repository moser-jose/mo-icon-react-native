import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRoundTransferDiagonal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.5 4 7.378 8V7.5m3.5 12.379L9.878 12v4.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenRoundTransferDiagonal };
export default React.memo(BrokenRoundTransferDiagonal);
