import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMen: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="10" cy="14" r="8" stroke="${color}" stroke-width="1.5"/><path fill="${color}" d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneMen);
