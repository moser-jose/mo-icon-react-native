import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCosmetic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 11.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0z" opacity=".5"/><path fill="${color}" d="M3 11h4V6a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 7zm8-.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"/><path fill="${color}" d="M15.75 15.95v3.55H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-3.55a5.5 5.5 0 0 1-1.5 0" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCosmetic);
