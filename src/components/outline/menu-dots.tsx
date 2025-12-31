import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineMenuDots: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M5 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m7-1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineMenuDots);
