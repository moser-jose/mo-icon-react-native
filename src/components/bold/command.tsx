import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCommand: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16 8h3a3 3 0 1 0-3-3zH8V5a3 3 0 1 0-3 3h3v8h8zm0 8h3a3 3 0 1 1-3 3zM5 16h3v3a3 3 0 1 1-3-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldCommand };
export default React.memo(BoldCommand);
