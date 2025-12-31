import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBackspace: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M6.871 19.499c.93.501 2.044.501 4.271.501h2.637c3.875 0 5.813 0 7.017-1.172S22 15.771 22 12s0-5.657-1.204-6.828S17.654 4 13.78 4h-2.637c-2.227 0-3.341 0-4.27.501-.93.502-1.52 1.42-2.701 3.259L3.49 8.82C2.497 10.366 2 11.14 2 12s.497 1.634 1.49 3.18l.68 1.06c1.181 1.838 1.771 2.757 2.701 3.259m4.16-10.53A.75.75 0 0 0 9.97 10.03L11.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L13 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L14.06 12l1.97-1.97a.75.75 0 0 0-1.06-1.06L13 10.94z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldBackspace);
