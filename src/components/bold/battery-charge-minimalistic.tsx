import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBatteryChargeMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m9.98-3.576a.75.75 0 0 1 .096 1.056l-1.475 1.77H12.5a.75.75 0 0 1 .576 1.23l-2.5 3a.75.75 0 0 1-1.152-.96l1.475-1.77H9a.75.75 0 0 1-.576-1.23l2.5-3a.75.75 0 0 1 1.056-.096" clip-rule="evenodd"/><path fill="${color}" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldBatteryChargeMinimalistic };
export default React.memo(BoldBatteryChargeMinimalistic);
