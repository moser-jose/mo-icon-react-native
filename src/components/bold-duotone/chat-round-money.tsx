import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneChatRoundMoney: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity=".5"/><path fill="${color}" d="M12.75 8a.75.75 0 0 0-1.5 0v.01c-1.089.275-2 1.133-2 2.323 0 1.457 1.365 2.417 2.75 2.417.824 0 1.25.533 1.25.917s-.426.916-1.25.916-1.25-.532-1.25-.916a.75.75 0 0 0-1.5 0c0 1.19.911 2.049 2 2.323V16a.75.75 0 0 0 1.5 0v-.01c1.089-.274 2-1.133 2-2.323 0-1.457-1.365-2.417-2.75-2.417-.824 0-1.25-.533-1.25-.917s.426-.916 1.25-.916 1.25.532 1.25.916a.75.75 0 0 0 1.5 0c0-1.19-.911-2.048-2-2.323z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneChatRoundMoney);
