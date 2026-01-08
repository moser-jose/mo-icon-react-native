import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneAsteroid: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 2C6.477 2 2 6.477 2 12q0 .668.085 1.312a6 6 0 0 1 7.297 8.342c.835.226 1.712.346 2.618.346 4.879 0 8.941-3.494 9.823-8.116a6.002 6.002 0 0 1-3.505-9.636A9.96 9.96 0 0 0 12 2" opacity=".5"/><path fill="${color}" d="M2.085 13.312a10.01 10.01 0 0 0 7.297 8.342 6 6 0 0 0-7.297-8.342m19.738.573q.175-.916.177-1.885a9.98 9.98 0 0 0-3.682-7.752 6.002 6.002 0 0 0 3.505 9.637M16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneAsteroid };
export default React.memo(BoldDuotoneAsteroid);
