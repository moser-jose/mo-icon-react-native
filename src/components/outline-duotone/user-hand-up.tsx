import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUserHandUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 21.5-.65-5.52C19.15 14.28 17.71 13 16 13H8c-3 0-4.933-2.731-5.618-5.472L2 6"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 13v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-5" opacity=".5"/><circle cx="12" cy="6" r="4" stroke="${color}" stroke-width="1.5" opacity=".9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneUserHandUp };
export default React.memo(OutlineDuotoneUserHandUp);
