import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWineglassTriangle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m12 14.571 8.516-8.707C21.562 4.794 20.8 3 19.3 3H14m-2 11.571L3.484 5.864C2.438 4.794 3.2 3 4.7 3H10m2 11.571V21m0 0h4.244M12 21H7.756M7.473 9.75h9.054"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenWineglassTriangle);
