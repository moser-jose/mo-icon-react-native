import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPlugCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 2C6.477 2 2 6.483 2 12.014c0 5.278 4.078 9.602 9.25 9.986v-6.061a3.505 3.505 0 0 1-2.75-3.424v-.501a1 1 0 0 1 1-1.001h.25V9.01a.75.75 0 1 1 1.5 0v2.002h1.5V9.01a.75.75 0 1 1 1.5 0v2.002h.25a1 1 0 0 1 1 1.002v.5a3.505 3.505 0 0 1-2.75 3.425V22c5.172-.384 9.25-4.708 9.25-9.986C22 6.484 17.523 2 12 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPlugCircle };
export default React.memo(BoldPlugCircle);
