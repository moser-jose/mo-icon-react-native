import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldLink: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M15.728 3.884c1.435-1.44 3.533-1.47 4.694-.305 1.164 1.169 1.133 3.28-.303 4.72l-2.424 2.434a.75.75 0 1 0 1.063 1.059l2.424-2.434c1.911-1.918 2.151-4.982.303-6.837-1.85-1.858-4.907-1.616-6.82.304L9.819 7.691c-1.911 1.92-2.151 4.983-.303 6.838a.75.75 0 0 0 1.063-1.059c-1.164-1.168-1.133-3.28.303-4.72z"/><path fill="${color}" d="M14.485 9.47a.75.75 0 0 0-1.063 1.059c1.164 1.168 1.133 3.28-.303 4.72l-4.847 4.867c-1.435 1.44-3.533 1.47-4.694.304-1.164-1.168-1.133-3.28.303-4.72l2.424-2.434a.75.75 0 1 0-1.063-1.058L2.818 14.64c-1.911 1.92-2.151 4.983-.303 6.839 1.85 1.857 4.907 1.615 6.82-.305l4.847-4.866c1.911-1.919 2.151-4.982.303-6.838"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldLink };
export default React.memo(BoldLink);
