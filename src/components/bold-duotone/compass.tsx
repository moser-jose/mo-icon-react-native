import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCompass: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="M13.024 14.56c.493-.198.739-.296.932-.466q.075-.065.139-.139c.17-.193.268-.44.465-.932.924-2.31 1.386-3.465.938-4.124A1.5 1.5 0 0 0 15.1 8.5c-.66-.448-1.814.014-4.124.938-.493.197-.74.295-.933.465q-.074.065-.138.139c-.17.193-.268.44-.465.932-.924 2.31-1.386 3.465-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCompass);
