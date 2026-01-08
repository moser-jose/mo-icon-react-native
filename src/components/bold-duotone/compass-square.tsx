import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCompassSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"/><path fill="${color}" d="M13.024 14.56c.493-.198.739-.296.932-.466q.075-.065.139-.139c.17-.193.268-.44.465-.932.924-2.31 1.386-3.465.938-4.124A1.5 1.5 0 0 0 15.1 8.5c-.66-.448-1.814.014-4.124.938-.493.197-.74.295-.933.465q-.074.065-.138.139c-.17.193-.268.44-.465.932-.924 2.31-1.386 3.465-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneCompassSquare };
export default React.memo(BoldDuotoneCompassSquare);
