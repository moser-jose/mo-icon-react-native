import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneClipboardText: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none"><path stroke="${color}" stroke-width="1.5" d="M16 4.002c2.175.012 3.353.108 4.121.877C21 5.757 21 7.172 21 10v6c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16v-6c0-2.828 0-4.243.879-5.121.768-.769 1.946-.865 4.121-.877" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 14.5h8"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 18h5.5" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneClipboardText);
