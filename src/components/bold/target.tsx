import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTarget: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.248 2A10.03 10.03 0 0 0 2 11.248h2.98a.752.752 0 1 1 0 1.504H2A10.03 10.03 0 0 0 11.248 22v-2.98a.752.752 0 0 1 1.504 0V22A10.03 10.03 0 0 0 22 12.752h-2.98a.752.752 0 0 1 0-1.504H22A10.03 10.03 0 0 0 12.752 2v2.98a.752.752 0 1 1-1.504 0zM9.242 12c0-.415.337-.752.752-.752h1.254V9.994a.752.752 0 1 1 1.504 0v1.254h1.254a.752.752 0 0 1 0 1.504h-1.254v1.254a.752.752 0 0 1-1.504 0v-1.254H9.994A.75.75 0 0 1 9.242 12" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTarget };
export default React.memo(BoldTarget);
