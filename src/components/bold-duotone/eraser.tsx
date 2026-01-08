import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneEraser: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14.952 3c-1.037 0-1.872.835-3.542 2.505l-4.91 4.91 7.085 7.085 4.91-4.91C20.165 10.92 21 10.085 21 9.048c0-1.038-.835-1.873-2.505-3.543S15.99 3 14.952 3" opacity=".5"/><path fill="${color}" d="M13.585 17.5 6.5 10.415l-.995.995C3.835 13.08 3 13.915 3 14.953c0 1.037.835 1.872 2.505 3.542S8.01 21 9.048 21c1.037 0 1.872-.835 3.542-2.505z"/><path fill="${color}" d="M9.033 21H9zm.03 0c.796-.006 1.476-.506 2.51-1.5H21a.75.75 0 0 1 0 1.5z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneEraser };
export default React.memo(BoldDuotoneEraser);
