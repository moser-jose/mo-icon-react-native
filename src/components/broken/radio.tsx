import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRadio: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 9h5a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4h1"/><path stroke="${color}" stroke-width="1.5" d="M9 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 11.5V13m-2 4h5M6.5 6 15 2m7 12c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenRadio);
