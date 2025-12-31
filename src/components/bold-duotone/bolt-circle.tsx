import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBoltCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12" opacity=".5"/><path fill="${color}" d="m11.227 8.57-2.015 1.604c-.845.673-1.268 1.01-1.185 1.386l.004.018c.094.374.63.518 1.702.805.595.16.893.24 1.033.465l.007.012c.135.228.058.514-.095 1.086l-.04.15c-.426 1.586-.638 2.38-.229 2.636s1.06-.263 2.363-1.3l2.015-1.605c.846-.673 1.268-1.01 1.186-1.386l-.004-.018c-.095-.374-.63-.517-1.702-.804-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.229-.058-.515.095-1.087l.04-.15c.425-1.586.638-2.379.229-2.635s-1.061.262-2.364 1.3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBoltCircle);
