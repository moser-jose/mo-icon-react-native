import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldChefHatHeart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 10a5 5 0 0 1 5.737-4.946 4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584v2.666H5v-2.666A5 5 0 0 1 2 10m9.043 3.67C10.165 13.024 9 11.984 9 11c0-1.673 1.65-2.297 3-1.005 1.35-1.292 3-.668 3 1.005 0 .985-1.165 2.025-2.043 2.67-.42.307-.63.461-.957.461-.328 0-.537-.154-.957-.462" clip-rule="evenodd"/><path fill="${color}" d="M5.586 21.414c-.503-.502-.574-1.267-.584-2.664h13.996c-.01 1.397-.081 2.162-.584 2.664C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldChefHatHeart);
