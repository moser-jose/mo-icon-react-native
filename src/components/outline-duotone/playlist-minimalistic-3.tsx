import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePlaylistMinimalistic3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 4H3m5 10H3m9-5H3" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M16 17.429C16 18.849 14.88 20 13.5 20S11 18.849 11 17.429s1.12-2.572 2.5-2.572S16 16.008 16 17.43Zm0 0V11"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m18.675 8.116-1.755.842c-.341.164-.512.246-.636.372a1 1 0 0 0-.223.356c-.061.166-.061.356-.061.735 0 .876 0 1.314.191 1.577a1 1 0 0 0 .63.396c.319.059.714-.131 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372a1 1 0 0 0 .223-.356c.061-.166.061-.355.061-.734 0-.877 0-1.315-.191-1.578a1 1 0 0 0-.63-.396c-.319-.058-.714.131-1.504.51Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotonePlaylistMinimalistic3);
