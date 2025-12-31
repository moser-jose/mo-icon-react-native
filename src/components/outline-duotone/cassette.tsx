import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCassette: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"/><path stroke="${color}" stroke-width="1.5" d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.5 4.5-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 4v4.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneCassette);
