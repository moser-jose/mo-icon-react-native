import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneThreeSquares: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M7 12H6c-1.886 0-2.828 0-3.414.586S2 14.114 2 16v2c0 1.886 0 2.828.586 3.414S4.114 22 6 22h2c1.886 0 2.828 0 3.414-.586S12 19.886 12 18v-1" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M12 7h-1c-1.886 0-2.828 0-3.414.586S7 9.114 7 11v2c0 1.886 0 2.828.586 3.414S9.114 17 11 17h2c1.886 0 2.828 0 3.414-.586S17 14.886 17 13v-1"/><path stroke="${color}" stroke-width="1.5" d="M12 6c0-1.886 0-2.828.586-3.414S14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v2c0 1.886 0 2.828-.586 3.414S19.886 12 18 12h-2c-1.886 0-2.828 0-3.414-.586S12 9.886 12 8z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneThreeSquares };
export default React.memo(OutlineDuotoneThreeSquares);
