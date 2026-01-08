import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRadioMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828"/><circle cx="8" cy="14" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.5 11H19m-5.5 3h.5m5 0h-2.5m-.5 3h-2.5m5.5 0h-.5M6.5 6 15 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenRadioMinimalistic };
export default React.memo(BrokenRadioMinimalistic);
