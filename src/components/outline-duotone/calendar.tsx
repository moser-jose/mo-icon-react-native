import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCalendar: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19" opacity=".5"/><path fill="${color}" d="M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCalendar };
export default React.memo(OutlineDuotoneCalendar);
