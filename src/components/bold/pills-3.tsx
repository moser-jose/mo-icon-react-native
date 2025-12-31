import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPills3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.682 12.682a4.5 4.5 0 0 1-7.62-2.432h8.876a4.5 4.5 0 0 1-1.256 2.432m1.256-3.932H2.063a4.5 4.5 0 0 1 8.875 0m3.82-1.629A3 3 0 1 0 19 2.88a3 3 0 0 0-4.242 4.242m6.147 4.973a3.74 3.74 0 0 1 0 5.286l-1.027 1.027v-.003l-.732-.14-.028-.008a2 2 0 0 1-.143-.04 4.5 4.5 0 0 1-.583-.237c-.5-.24-1.2-.671-1.95-1.421s-1.181-1.451-1.422-1.951a5 5 0 0 1-.236-.583 2 2 0 0 1-.048-.17l-.141-.733h-.003l1.027-1.027a3.74 3.74 0 0 1 5.286 0m-7.579 2.293.03.094c.06.193.16.459.313.777.307.637.832 1.48 1.712 2.36s1.723 1.405 2.36 1.712a6 6 0 0 0 .871.343l-1.231 1.231a3.738 3.738 0 0 1-5.286-5.286z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldPills3);
