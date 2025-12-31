import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldLike: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m20.27 16.265.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973 1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.058 1.4-1.725 1.975l-1.439 1.24c-.406.35-.619.873-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.596 22h4.649c3.481 0 6.452-2.426 7.025-5.735"/><path fill="${color}" fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldLike);
