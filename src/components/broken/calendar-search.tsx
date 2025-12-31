import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCalendarSearch: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 18h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4M7 4V2.5M17 4V2.5"/><circle cx="18" cy="18" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.5 20.5 22 22m-.5-13H10.75M2 9h3.875"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenCalendarSearch);
