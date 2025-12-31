import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCosmetic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0zm1-2h4V6a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 7zm8 0a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m4.75 7.21a7 7 0 0 0 1.5 0v1.79h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.25z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldCosmetic);
