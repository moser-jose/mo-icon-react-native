import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePlay: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12z" clip-rule="evenodd"/><path fill="${color}" d="m8.597 21.615 12.812-6.968A2.99 2.99 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePlay };
export default React.memo(BoldDuotonePlay);
