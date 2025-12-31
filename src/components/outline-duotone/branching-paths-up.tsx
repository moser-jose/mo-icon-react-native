import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBranchingPathsUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"/><path fill="${color}" d="M11.25 18a.75.75 0 0 0 1.5 0zM18 8l.53.53a.75.75 0 0 0 0-1.06zm-.97-2.03a.75.75 0 1 0-1.06 1.06zm-1.06 3a.75.75 0 1 0 1.06 1.06zM12.75 18v-6h-1.5v6zM16 8.75h2v-1.5h-2zm2.53-1.28-1.5-1.5-1.06 1.06 1.5 1.5zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5zM12.75 12A3.25 3.25 0 0 1 16 8.75v-1.5A4.75 4.75 0 0 0 11.25 12z" opacity=".5"/><path fill="${color}" d="M11.25 18a.75.75 0 0 0 1.5 0zM6 8l-.53-.53a.75.75 0 0 0 0 1.06zm2.03-.97a.75.75 0 0 0-1.06-1.06zm-1.06 3a.75.75 0 1 0 1.06-1.06zM12.75 18v-6h-1.5v6zM8 7.25H6v1.5h2zM6.53 8.53l1.5-1.5-1.06-1.06-1.5 1.5zm-1.06 0 1.5 1.5 1.06-1.06-1.5-1.5zM12.75 12A4.75 4.75 0 0 0 8 7.25v1.5A3.25 3.25 0 0 1 11.25 12z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneBranchingPathsUp);
