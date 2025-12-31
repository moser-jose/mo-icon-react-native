import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAirbudsCaseOpen: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3.955 19.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-.167c0-.781 0-1.172-.207-1.442a1 1 0 0 0-.184-.184c-.27-.207-.66-.207-1.442-.207H4.833c-.782 0-1.172 0-1.442.207q-.105.08-.184.184C3 11.661 3 12.051 3 12.833V13c0 1.169 0 2.156.029 3"/><path stroke="${color}" stroke-width="1.5" d="M3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2 4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942Zm17 0V4.625A2.625 2.625 0 0 0 17.875 2 4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47ZM8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenAirbudsCaseOpen);
