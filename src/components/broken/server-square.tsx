import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenServerSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 3c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3"/><path fill="${color}" d="M14 12.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-16 1.5h12v-1.5H2zm16 0h4v-1.5h-4z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.5 16.5H18m-4.5-9H18m-12 10v-2m0-7v-2m3 11v-2m0-7v-2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenServerSquare };
export default React.memo(BrokenServerSquare);
