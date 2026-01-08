import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTram: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 10v2c0 3.771 0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12v-2c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 16H17M7 16h1.5M7 20l-1 2m11-2 1 2M10 2v.5a2 2 0 1 0 4 0V2m6 11h-4M4 13h8"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTram };
export default React.memo(BrokenTram);
