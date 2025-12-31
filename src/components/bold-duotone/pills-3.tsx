import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePills3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242m6.148 10.259a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z" opacity=".5"/><path fill="${color}" d="M19.878 18.408v-.003l-.732-.141-.028-.007a2 2 0 0 1-.143-.041 4.5 4.5 0 0 1-.583-.236c-.5-.241-1.2-.672-1.95-1.422s-1.18-1.45-1.422-1.95a4.5 4.5 0 0 1-.236-.583 3 3 0 0 1-.048-.171l-.141-.733h-.003l-1.266 1.266.03.094c.06.193.16.46.313.778.307.637.832 1.48 1.712 2.36s1.723 1.405 2.36 1.712a6 6 0 0 0 .871.342zM9.727 12.682a4.61 4.61 0 0 1-6.454 0A4.46 4.46 0 0 1 2 10.25h9a4.46 4.46 0 0 1-1.273 2.432M11 8.75H2a4.46 4.46 0 0 1 1.273-2.432 4.61 4.61 0 0 1 6.454 0A4.46 4.46 0 0 1 11 8.75"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotonePills3);
