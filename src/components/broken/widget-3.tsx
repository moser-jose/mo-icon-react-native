import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWidget3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2.668 5.35A4 4 0 1 0 5.35 2.668M21.832 19.15a4 4 0 1 0-2.682 2.682"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenWidget3 };
export default React.memo(BrokenWidget3);
