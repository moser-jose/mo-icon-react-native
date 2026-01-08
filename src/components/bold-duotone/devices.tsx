import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneDevices: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14.052 2c1.68 0 3.01 0 4.052.142 1.072.147 1.94.456 2.624 1.152s.988 1.58 1.132 2.67c.14 1.06.14 2.414.14 4.123v3.826c0 1.71 0 3.064-.14 4.123-.144 1.09-.448 1.974-1.132 2.67s-1.552 1.005-2.624 1.152C17.063 22 15.732 22 14.052 22h-.104c-1.68 0-3.01 0-4.052-.142-1.072-.147-1.94-.456-2.624-1.152s-.988-1.58-1.132-2.67C6 16.976 6 15.622 6 13.913v-3.826c0-1.71 0-3.064.14-4.123.144-1.09.448-1.974 1.132-2.67S8.824 2.29 9.896 2.142C10.937 2 12.268 2 13.948 2z" opacity=".5"/><path fill="${color}" d="M12 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneDevices };
export default React.memo(BoldDuotoneDevices);
