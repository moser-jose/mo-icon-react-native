import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePieChart3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6.444 3.686a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.297C12 3.087 12 4.058 12 6v2c0 1.886 0 2.829.586 3.415S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.597-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.686"/><path fill="${color}" fill-rule="evenodd" d="M13.774 2.128a.75.75 0 0 1 .913-.54 10.77 10.77 0 0 1 7.724 7.725.75.75 0 1 1-1.452.374 9.27 9.27 0 0 0-6.646-6.646.75.75 0 0 1-.54-.913" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePieChart3 };
export default React.memo(BoldDuotonePieChart3);
