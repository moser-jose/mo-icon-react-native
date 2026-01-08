import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCardTransfer: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5M14 4c3.771 0 5.657 0 6.828 1.172C21.892 6.235 21.99 7.886 22 11"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 14v6m0 0 2-2m-2 2-2-2m6.5 2v-6m0 0 2 2m-2-2-2 2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 16H6m-4-6h5m15 0H11"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenCardTransfer };
export default React.memo(BrokenCardTransfer);
