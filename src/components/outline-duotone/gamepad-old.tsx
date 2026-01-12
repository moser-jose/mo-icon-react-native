import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneGamepadOld: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 10v4m-2-2h4" opacity=".5"/><path fill="${color}" d="M16 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 4V3a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V0" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M2 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 7.8 22 9.2 22 12s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12Z"/></g><defs><clipPath id="a"><path fill="${color}" d="M0 0h24v24H0z"/></clipPath></defs></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneGamepadOld };
export default React.memo(OutlineDuotoneGamepadOld);
