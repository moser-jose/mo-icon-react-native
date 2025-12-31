import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSquareArrowRightDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M20.536 20.536C19.07 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535" opacity=".5"/><path fill="${color}" d="M15.579 14.829a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.432L8.64 9.702a.75.75 0 0 1 1.061-1.06l4.377 4.376v-2.432a.75.75 0 0 1 1.5 0z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneSquareArrowRightDown);
