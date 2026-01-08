import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneKeyMinimalistic2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clip-rule="evenodd"/><path fill="${color}" d="M10.609 14.451a7 7 0 0 1-1.06-1.06l-6.58 6.578a.75.75 0 0 0 1.061 1.06l.47-.469.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneKeyMinimalistic2 };
export default React.memo(BoldDuotoneKeyMinimalistic2);
