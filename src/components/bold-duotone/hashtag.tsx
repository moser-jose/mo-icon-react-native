import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHashtag: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.2 2.278c.4.11.633.524.523.923l-5 18a.75.75 0 1 1-1.446-.402l5-18a.75.75 0 0 1 .924-.521m8.999 0c.4.11.633.524.523.923l-5 18a.75.75 0 0 1-1.446-.402l5-18a.75.75 0 0 1 .924-.521" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M3.25 9A.75.75 0 0 1 4 8.25h18a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 9m-2 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneHashtag };
export default React.memo(BoldDuotoneHashtag);
