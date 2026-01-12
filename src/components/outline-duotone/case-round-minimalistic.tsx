import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCaseRoundMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 11v2m8-2v2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCaseRoundMinimalistic };
export default React.memo(OutlineDuotoneCaseRoundMinimalistic);
