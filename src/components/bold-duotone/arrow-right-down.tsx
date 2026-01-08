import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneArrowRightDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17.47 8.47a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.53-1.28z" clip-rule="evenodd"/><path fill="${color}" d="M5.47 6.53a.75.75 0 0 1 1.06-1.06l6.97 6.97-1.06 1.06z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneArrowRightDown };
export default React.memo(BoldDuotoneArrowRightDown);
