import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldEmojiFunnySquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.48 6.504c-.943 1.633-.388 3.706.724 7.853 1.11 4.147 1.666 6.22 3.3 7.163s3.706.387 7.853-.724 6.22-1.666 7.163-3.3.387-3.706-.724-7.853-1.666-6.22-3.3-7.163-3.706-.388-7.853.724c-4.147 1.11-6.22 1.666-7.163 3.3m5.705 9.247a.75.75 0 0 1 .91-.545c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.278-1.815a.75.75 0 1 1 1.043 1.077 8.4 8.4 0 0 1-1.15.93l.159.32a1.5 1.5 0 1 1-2.693 1.323l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91m7.29-6.235c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19m-6.373 3.26c.534-.143.792-.907.578-1.707s-.82-1.333-1.354-1.19-.792.907-.578 1.707.82 1.333 1.354 1.19" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldEmojiFunnySquare };
export default React.memo(BoldEmojiFunnySquare);
