import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSunrise: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 19h14" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 16h20"/><path stroke="${color}" stroke-width="1.5" d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z" opacity=".5"/><path fill="${color}" d="m12 10 .53-.53a.75.75 0 0 0-1.06 0zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm-4-1.06a.75.75 0 1 0 1.06 1.06zM12.75 16v-6h-1.5v6zm-1.28-5.47 2 2 1.06-1.06-2-2zm0-1.06-2 2 1.06 1.06 2-2z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v1m10 9h-1M3 12H2m17.07-7.07-.392.393M5.322 5.322l-.393-.393" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSunrise };
export default React.memo(OutlineDuotoneSunrise);
