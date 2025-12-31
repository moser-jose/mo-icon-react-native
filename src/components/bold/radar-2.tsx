import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldRadar2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.358-15.07a5.2 5.2 0 0 0-2.232-.107.75.75 0 0 1-.252-1.478 6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166l-2.137-1.73A2.85 2.85 0 1 0 12 9.151a.75.75 0 0 1-.001-1.5 4.35 4.35 0 1 1-3.802 2.236l-.709-.573a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldRadar2);
