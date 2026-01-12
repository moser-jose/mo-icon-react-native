import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCalendarSearch: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5"/><circle cx="18" cy="18" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.5 20.5 22 22"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCalendarSearch };
export default React.memo(OutlineDuotoneCalendarSearch);
