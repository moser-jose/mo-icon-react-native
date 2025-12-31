import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBatteryHalfMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 9s.5.9.5 3-.5 3-.5 3m3.5-6s.5.9.5 3-.5 3-.5 3M22 14v-4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBatteryHalfMinimalistic);
