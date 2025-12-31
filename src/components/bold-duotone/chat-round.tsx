import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneChatRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7.456 3.09A10 10 0 0 0 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.764.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.134A9.96 9.96 0 0 0 12 22c4.885 0 8.952-3.503 9.826-8.134A9 9 0 0 1 7.456 3.09"/><path fill="${color}" d="M21.826 13.866q.172-.909.174-1.866c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-4.544 1.09 9 9 0 0 0 14.37 10.776" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneChatRound);
