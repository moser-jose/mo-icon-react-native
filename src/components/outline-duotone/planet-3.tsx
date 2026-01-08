import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePlanet3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 8.008S5.937 11 10.437 11c3.063 0 4.689-1.773 6.063-2.244 2.583-.886 4.5-.748 4.5-.748m-18 6s2.089-.138 4.903.748C9.401 15.226 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePlanet3 };
export default React.memo(OutlineDuotonePlanet3);
