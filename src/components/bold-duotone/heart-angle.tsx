import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHeartAngle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 9.137c0 4.405 3.298 6.947 6.106 9.11q.44.337.856.664C10 19.73 11 20.501 12 20.501v-15C7.5.826 2 4.274 2 9.137" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="m14 7.5-2-2v15c1 0 2-.77 3.038-1.589q.417-.328.856-.664C18.702 16.084 22 13.542 22 9.137c0-4.462-4.631-7.734-8.871-4.63L15.06 6.44A.75.75 0 0 1 14 7.499"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneHeartAngle);
