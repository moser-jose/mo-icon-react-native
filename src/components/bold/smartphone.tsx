import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSmartphone: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12.052 2h-.104c-1.68 0-3.01 0-4.052.142-1.072.147-1.94.456-2.624 1.152s-.988 1.58-1.132 2.67C4 7.024 4 8.378 4 10.087v3.826c0 1.71 0 3.064.14 4.123.144 1.09.448 1.974 1.132 2.67s1.552 1.005 2.624 1.152C8.937 22 10.268 22 11.948 22h.104c1.68 0 3.01 0 4.052-.142 1.072-.147 1.94-.456 2.624-1.152s.988-1.58 1.132-2.67c.14-1.06.14-2.414.14-4.123v-3.826c0-1.71 0-3.064-.14-4.123-.144-1.09-.448-1.974-1.132-2.67s-1.552-1.005-2.624-1.152C15.063 2 13.732 2 12.052 2m-3.48 16.512a.69.69 0 0 1 .685-.698h5.486c.379 0 .686.312.686.698a.69.69 0 0 1-.686.697H9.257a.69.69 0 0 1-.686-.697" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldSmartphone);
