import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneScreencast: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 20h3c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4H6.5c-.464 0-.697 0-.892.02a4 4 0 0 0-3.589 3.588C2 7.803 2 8.036 2 8.5V11" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 20a9 9 0 0 0-9-9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 20a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneScreencast };
export default React.memo(OutlineDuotoneScreencast);
