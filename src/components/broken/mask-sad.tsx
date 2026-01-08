import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMaskSad: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 11v1c0 5.49-4.239 8.155-6.899 9.286-.721.307-1.082.46-2.101.46-1.02 0-1.38-.153-2.101-.46C7.239 20.155 3 17.49 3 12V6.719c0-2.19 0-3.285.707-3.884.708-.6 1.789-.42 3.95-.059l1.055.176c1.64.273 2.46.41 3.288.41s1.648-.137 3.288-.41l1.054-.176c2.163-.36 3.244-.54 3.95.059C21 3.434 21 4.529 21 6.719V7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1m3 0c.291-.583 1.077-1 2-1s1.709.417 2 1m-9 6s1.05-1 3.5-1 3.5 1 3.5 1"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMaskSad };
export default React.memo(BrokenMaskSad);
