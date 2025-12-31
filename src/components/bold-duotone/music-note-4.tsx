import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMusicNote4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M19.85 4.7c-.398-1.124-1.497-1.821-2.656-1.682a2.7 2.7 0 0 0-.77.24c-.256.114-.567.273-.95.47L13 4.995c-.284.146-.507.26-.698.41a2.6 2.6 0 0 0-.942 1.563c-.045.242-.045.497-.045.823v6.506a4.27 4.27 0 0 0-2.971-1.206C5.944 13.093 4 15.087 4 17.547 4 20.006 5.944 22 8.343 22s4.343-1.994 4.343-4.454v-6.363c.43.226.926.325 1.434.265.261-.032.514-.125.771-.24.255-.114.566-.274.949-.47l2.475-1.27c.285-.145.507-.259.698-.408.49-.385.826-.942.942-1.564C20 7.254 20 7 20 6.673v-.077c0-.439 0-.796-.015-1.08a3 3 0 0 0-.135-.815"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneMusicNote4);
