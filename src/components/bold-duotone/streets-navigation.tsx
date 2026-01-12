import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneStreetsNavigation: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m21.323 3.785-6.216 6.63 6.18 4.856C22 14.167 22 12.533 22 9.499c0-2.982 0-4.611-.677-5.714M15.267 19.2l-1.335-2.67C13.089 14.843 12.668 14 12 14s-1.089.843-1.932 2.53L8.733 19.2c-.512 1.024-.768 1.537-.73 1.859.057.465.407.842.868.93.318.062.847-.157 1.905-.595.39-.162.587-.243.787-.284.288-.06.586-.06.874 0 .2.041.396.122.787.284 1.058.438 1.586.657 1.905.596.46-.09.81-.465.867-.931.04-.323-.217-.835-.729-1.858"/><path fill="${color}" d="M2 9.5v.039c0 3.26.004 4.896.908 5.998a4 4 0 0 0 .554.554q.27.222.591.377C5.15 17 6.75 17 9.497 17H14.5l1.343-.002c.84-.006 1.55-.024 2.157-.077.944-.082 1.642-.25 2.204-.592l-6.656-5.23-10.587-7.7-.053.064C2 4.568 2 6.212 2 9.499" opacity=".5"/><path fill="${color}" d="M14.5 2h-5c-2.616 0-4.191 0-5.283.458l9.689 7.046 6.366-6.79C19.168 2 17.534 2 14.5 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneStreetsNavigation };
export default React.memo(BoldDuotoneStreetsNavigation);
