import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWineglassTriangle: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M19.3 3H4.7C3.2 3 2.439 4.794 3.485 5.864l7.801 7.976a1 1 0 0 0 1.43 0l7.801-7.976C21.562 4.794 20.8 3 19.3 3" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M7.006 21a.75.75 0 0 1 .75-.75h8.488a.75.75 0 0 1 0 1.5H7.756a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" d="M11.285 13.84a1 1 0 0 0 1.43 0L16.47 10H7.529z"/><path fill="${color}" d="M11.285 13.84a1 1 0 0 0 1.43 0l.035-.035v6.445h-1.5v-6.445z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneWineglassTriangle };
export default React.memo(BoldDuotoneWineglassTriangle);
