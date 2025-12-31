import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldEraser: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.41 5.505C13.08 3.835 13.915 3 14.952 3c1.038 0 1.873.835 3.543 2.505S21 8.01 21 9.048c0 1.037-.835 1.872-2.505 3.542l-4.193 4.194-7.086-7.086z"/><path fill="${color}" d="m6.156 10.759 7.085 7.085-.65.65c-.378.379-.713.714-1.018 1.006H21a.75.75 0 0 1 0 1.5H9c-1.016-.025-1.85-.86-3.495-2.505C3.835 16.825 3 15.99 3 14.952c0-1.037.835-1.872 2.505-3.542z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldEraser);
