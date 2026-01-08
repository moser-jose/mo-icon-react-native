import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPlanet2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-dasharray="3.5 2.5" stroke-linecap="round" stroke-width="1.5" d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538 1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.516-.823.163-2.178 1.672-3.69"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 5.07A8 8 0 1 1 5.07 8"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenPlanet2 };
export default React.memo(BrokenPlanet2);
