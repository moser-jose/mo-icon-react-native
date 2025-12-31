import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePlanet4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M18 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496 2.009-.59 3.5-.499 3.5-.499m-14 5s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18a10.85 10.85 0 0 0 5.181-1.333" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M20.53 4.045a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotonePlanet4);
