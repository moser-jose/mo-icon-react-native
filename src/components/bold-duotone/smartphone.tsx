import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSmartphone: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.052 2c1.68 0 3.01 0 4.052.142 1.072.147 1.94.456 2.624 1.152s.988 1.58 1.132 2.67c.14 1.06.14 2.414.14 4.123v3.826c0 1.71 0 3.064-.14 4.123-.144 1.09-.448 1.974-1.132 2.67s-1.552 1.005-2.624 1.152C15.063 22 13.732 22 12.052 22h-.104c-1.68 0-3.01 0-4.052-.142-1.072-.147-1.94-.456-2.624-1.152s-.988-1.58-1.132-2.67C4 16.976 4 15.622 4 13.913v-3.826c0-1.71 0-3.064.14-4.123.144-1.09.448-1.974 1.132-2.67S6.824 2.29 7.896 2.142C8.937 2 10.268 2 11.948 2z" opacity=".5"/><path fill="${color}" d="M8.571 18.51c0-.385.307-.698.686-.698h5.486c.378 0 .685.313.685.698a.69.69 0 0 1-.685.698H9.257a.69.69 0 0 1-.686-.698"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneSmartphone);
