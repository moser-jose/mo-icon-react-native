import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneChatRoundDots: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12c0 1.76.413 3.423 1.148 4.898.195.392.26.84.147 1.263l-.655 2.448a1.43 1.43 0 0 0 1.75 1.751l2.45-.655a1.8 1.8 0 0 1 1.262.147A10.96 10.96 0 0 0 12 23" opacity=".5"/><path fill="${color}" d="M10.9 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0m-4.4 0a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0m8.8 0a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneChatRoundDots);
