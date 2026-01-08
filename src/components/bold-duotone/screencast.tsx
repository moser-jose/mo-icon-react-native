import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneScreencast: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4" opacity=".5"/><path fill="${color}" d="M2.75 9.5a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 11 19.25a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2.75 9.5"/><path fill="${color}" d="M2.75 12.5a.75.75 0 0 0 0 1.5C5.65 14 8 16.35 8 19.25a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-6.75-6.75"/><path fill="${color}" d="M2.75 15.5a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 5 19.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneScreencast };
export default React.memo(BoldDuotoneScreencast);
