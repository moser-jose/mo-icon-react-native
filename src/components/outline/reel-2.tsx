import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineReel2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5m5.48 18.5A10.75 10.75 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75h10a.75.75 0 0 0 0-1.5zM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"/><path fill="${color}" d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineReel2);
