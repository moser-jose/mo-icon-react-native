import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneColourTuneing: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 12h7.5M22 12h-7.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10S10.412 2 8.144 2c-1.734 0-4 3-4 6.316"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneColourTuneing };
export default React.memo(OutlineDuotoneColourTuneing);
