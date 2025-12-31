import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneForbidden: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m3.757 17.394 1.425 1.424 1.424 1.425c.867.867 1.3 1.3 1.852 1.529.551.228 1.165.228 2.39.228h2.303c1.226 0 1.84 0 2.39-.228.552-.229.986-.662 1.853-1.53l2.849-2.848c.867-.867 1.3-1.3 1.529-1.852.228-.551.228-1.165.228-2.39v-2.303c0-1.226 0-1.84-.228-2.39-.229-.552-.662-.986-1.53-1.853l-1.424-1.424-1.425-1.425c-.867-.867-1.3-1.3-1.852-1.529C14.991 2 14.378 2 13.151 2h-2.302c-1.227 0-1.84 0-2.391.228-.551.229-.985.662-1.852 1.53L3.757 6.605c-.867.867-1.3 1.3-1.529 1.852S2 9.623 2 10.848v2.303c0 1.226 0 1.84.228 2.39.228.552.662.986 1.53 1.853" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M18.818 5.182 5.182 18.818"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneForbidden);
