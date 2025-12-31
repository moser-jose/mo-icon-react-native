import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldLeaf: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.25 2.083a3.5 3.5 0 0 0-.713.242C6.553 4.188 4 9.395 4 13.857c0 4.24 3.183 7.723 7.25 8.108zm1.5 19.882c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zm-2.352-3.15a9.2 9.2 0 0 0-2.445-1.705 3.5 3.5 0 0 0-.713-.242v5.106zm3.028 4.594-6.186 6.187v2.878l6.75-6.75.132-.132a15 15 0 0 0-.696-2.183"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldLeaf);
