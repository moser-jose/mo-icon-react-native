import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCalendarDate: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 4V2.5M17 4V2.5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 14.5 1.5-1.5v4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0Zm8.5-7H10.75M2 9h3.875"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828-.653.654-1.528.943-2.828 1.07"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenCalendarDate);
