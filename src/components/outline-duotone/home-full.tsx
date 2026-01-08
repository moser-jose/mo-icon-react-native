import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneHomeFull: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 22H2m0-11 8.126-6.5a3 3 0 0 1 3.748 0L22 11"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4 22V9.5M20 22V9.5"/><path stroke="${color}" stroke-width="1.5" d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneHomeFull };
export default React.memo(OutlineDuotoneHomeFull);
