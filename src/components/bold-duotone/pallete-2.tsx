import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePallete2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M10.847 21.934C5.867 21.362 2 17.133 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37-1.618-.209-3.075-.397-3.652.518-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751" opacity=".5"/><path fill="${color}" d="M11.085 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotonePallete2);
