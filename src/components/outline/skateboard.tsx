import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineSkateboard: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m2.624 6.584.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219 1.248.832-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219zM7 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M4.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M14.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineSkateboard);
