import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneListArrowDown: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 17.5 2.5 2.5m0 0 2.5-2.5M17.5 20v-6"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneListArrowDown };
export default React.memo(OutlineDuotoneListArrowDown);
