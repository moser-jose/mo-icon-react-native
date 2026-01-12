import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWineglassTriangle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.244 21H7.756M4.701 3h14.598c1.5 0 2.263 1.794 1.217 2.864l-7.801 7.976a1 1 0 0 1-1.43 0L3.484 5.864C2.438 4.794 3.2 3 4.7 3Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 14.571V21M7.473 9.75h9.054" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneWineglassTriangle };
export default React.memo(OutlineDuotoneWineglassTriangle);
