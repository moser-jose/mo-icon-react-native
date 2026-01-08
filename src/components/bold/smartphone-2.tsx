import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSmartphone2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22s5.657 0 6.828-1.172S20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2 6.343 2 5.172 3.172M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldSmartphone2 };
export default React.memo(BoldSmartphone2);
