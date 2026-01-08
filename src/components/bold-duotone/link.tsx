import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneLink: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M15.728 3.884c1.435-1.44 3.533-1.47 4.694-.305 1.164 1.169 1.133 3.28-.303 4.72l-2.424 2.434a.75.75 0 1 0 1.063 1.059l2.424-2.434c1.911-1.918 2.151-4.982.303-6.837-1.85-1.858-4.907-1.616-6.82.304L9.819 7.691c-1.911 1.92-2.151 4.983-.303 6.838a.75.75 0 0 0 1.063-1.059c-1.164-1.168-1.133-3.28.303-4.72z"/><path fill="${color}" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.132 3.279-.303 4.72L8.27 20.116c-1.434 1.44-3.532 1.47-4.694.304-1.163-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 1 0-1.062-1.059l-2.424 2.433C.906 16.56.666 19.623 2.515 21.48c1.85 1.858 4.907 1.615 6.819-.304l4.848-4.867c1.91-1.918 2.15-4.982.303-6.837" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneLink };
export default React.memo(BoldDuotoneLink);
