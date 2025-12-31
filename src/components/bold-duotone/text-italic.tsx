import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTextItalic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M9 1h12a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2m-.744 20H3a1 1 0 1 0 0 2h12a1 1 0 0 0 0-2z" clip-rule="evenodd"/><path fill="${color}" d="m13.656 3-5.4 18h2.088l5.4-18z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneTextItalic);
