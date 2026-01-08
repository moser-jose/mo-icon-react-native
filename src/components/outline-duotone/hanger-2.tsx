import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneHanger2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.66 3.66 0 0 1 2.082.61l7.433 5.01c1.306.882.613 2.75-1.02 2.75H18m-6.198-8.37a3.64 3.64 0 0 0-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M6 18c0-1.886 0-2.828.586-3.414S8.114 14 10 14h4c1.886 0 2.828 0 3.414.586S18 16.114 18 18s0 2.828-.586 3.414S15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586S6 19.886 6 18Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneHanger2 };
export default React.memo(OutlineDuotoneHanger2);
