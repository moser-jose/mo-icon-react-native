import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenHanger: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.536 6.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.149v.284m0 0a3.66 3.66 0 0 1 2.082.61L16 12.668m-4.198-2.037a3.64 3.64 0 0 0-2.051.649l-7.096 4.99C1.383 17.165 2.087 19 3.703 19h16.595c1.633 0 2.325-1.869 1.019-2.75L19 14.69"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenHanger };
export default React.memo(BrokenHanger);
