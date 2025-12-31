import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAirbudsLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 18.667v.833c0 .14 0 .209.003.268a2.35 2.35 0 0 0 2.23 2.229C4.29 22 4.36 22 4.5 22s.209 0 .268-.003a2.35 2.35 0 0 0 2.229-2.23C7 19.71 7 19.64 7 19.5v-.833m-5 0h5m-5 0L2.003 13M7 18.667V12a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.335A3.353 3.353 0 0 0 7.664 2H7.56A5.59 5.59 0 0 0 2 7.56V9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.676" d="M8 5v3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15.5 11a5.5 5.5 0 1 0 5.5 5.5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14v5h3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 5.1A5.01 5.01 0 0 1 17.9 9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenAirbudsLeft);
