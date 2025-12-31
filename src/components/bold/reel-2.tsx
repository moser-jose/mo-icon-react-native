import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldReel2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"/><path fill="${color}" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4.73 8.5h3.98a.75.75 0 0 1 0 1.5zm1-16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldReel2);
