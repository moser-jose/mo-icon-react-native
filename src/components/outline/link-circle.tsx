import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineLinkCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2.75 12C2.75 9.1 5.1 6.75 8 6.75a.75.75 0 0 0 0-1.5A6.75 6.75 0 1 0 14.75 12a.75.75 0 0 0-1.5 0 5.25 5.25 0 1 1-10.5 0"/><path fill="${color}" d="M21.25 12c0 2.9-2.35 5.25-5.25 5.25a.75.75 0 0 0 0 1.5A6.75 6.75 0 1 0 9.25 12a.75.75 0 0 0 1.5 0 5.25 5.25 0 1 1 10.5 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineLinkCircle };
export default React.memo(OutlineLinkCircle);
