import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTextBold: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M4 4.609A3.61 3.61 0 0 1 7.609 1H12a6 6 0 0 1 0 12H4zM7.609 3C6.72 3 6 3.72 6 4.609V11h6a4 4 0 0 0 0-8z" clip-rule="evenodd"/><path fill="${color}" d="M4 13v6.942A3.06 3.06 0 0 0 7.059 23H14a6 6 0 0 0 2.102-11.621A5.98 5.98 0 0 1 12 13h2a4 4 0 0 1 0 8H7.059A1.06 1.06 0 0 1 6 19.942V13z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneTextBold };
export default React.memo(BoldDuotoneTextBold);
