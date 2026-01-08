import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlinePlay: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M7.238 3.043C5.652 2.181 3.75 3.32 3.75 5.032v13.934c0 1.714 1.902 2.851 3.488 1.989l12.812-6.967c1.6-.87 1.6-3.107 0-3.977zM2.25 5.032c0-2.905 3.167-4.687 5.705-3.306l12.812 6.967c2.644 1.438 2.644 5.175 0 6.612L7.955 22.273c-2.538 1.38-5.705-.402-5.705-3.307z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlinePlay };
export default React.memo(OutlinePlay);
