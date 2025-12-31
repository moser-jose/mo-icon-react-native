import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldRoundArrowRightDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9.75 15c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69L9.53 8.47a.75.75 0 0 0-1.06 1.06l4.72 4.72H10.5a.75.75 0 0 0-.75.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldRoundArrowRightDown);
