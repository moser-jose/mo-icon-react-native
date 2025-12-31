import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTuning4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-2 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4m5.25-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M14 19.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM10.75 4a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75M5 11.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM4.25 20a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M19 3.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldTuning4);
