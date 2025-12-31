import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineLeaf: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.22 1.646a4.2 4.2 0 0 1 3.56 0c2.176 1.017 3.914 2.92 5.104 5.112 1.192 2.194 1.866 4.734 1.866 7.099 0 4.899-3.905 8.893-8.75 8.893s-8.75-3.994-8.75-8.893c0-2.365.674-4.905 1.866-7.099 1.19-2.191 2.928-4.095 5.104-5.112m1.03 1.21a3 3 0 0 0-.395.149c-1.809.845-3.339 2.476-4.421 4.469-1.081 1.99-1.684 4.286-1.684 6.383 0 3.836 2.858 6.971 6.5 7.354zm1.5 0V7.19l2.628-2.628a8.4 8.4 0 0 0-2.233-1.556 3 3 0 0 0-.395-.149m3.636 2.818L12.75 9.311v3.378l4.954-4.954-.138-.261a12.7 12.7 0 0 0-1.18-1.8m1.972 3.529L12.75 14.81v2.878l6.22-6.22.047.049a14 14 0 0 0-.66-2.315m.88 4.12-6.488 6.488v1.4c3.642-.383 6.5-3.518 6.5-7.354q0-.265-.013-.534" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineLeaf);
