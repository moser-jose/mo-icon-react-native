import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSmartHome: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 22c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823c-.317.58-.44 1.233-.489 2.177" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 22a9 9 0 0 0-9-9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSmartHome };
export default React.memo(OutlineDuotoneSmartHome);
