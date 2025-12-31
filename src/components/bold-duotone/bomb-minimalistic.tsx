import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBombMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0" opacity=".5"/><path fill="${color}" d="M16.67 3.165a.75.75 0 1 0-1.34.67l.5 1a.75.75 0 1 0 1.34-.67zm3.165 3.665a.75.75 0 1 0-.67 1.341l1 .5a.75.75 0 1 0 .67-1.342zm.695-2.3a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zm-5.223 5.224L17.53 7.53a.75.75 0 0 0-1.06-1.06l-2.224 2.223c.388.317.744.673 1.061 1.06"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBombMinimalistic);
