import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneHamburgerMenu: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 7H4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 12H4" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 17H4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneHamburgerMenu };
export default React.memo(OutlineDuotoneHamburgerMenu);
