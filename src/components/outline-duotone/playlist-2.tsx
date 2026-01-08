import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePlaylist2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429s1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m18.675 7.116-1.755.842c-.341.164-.512.246-.636.372a1 1 0 0 0-.223.356C16 8.852 16 9.042 16 9.421c0 .876 0 1.314.191 1.577a1 1 0 0 0 .63.396c.319.059.714-.131 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372.098-.101.175-.223.223-.356.061-.166.061-.355.061-.734 0-.877 0-1.315-.191-1.578a1 1 0 0 0-.63-.396c-.319-.058-.714.131-1.504.51Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 5H3m10 4H3m6 4H3m5 4H3" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePlaylist2 };
export default React.memo(OutlineDuotonePlaylist2);
