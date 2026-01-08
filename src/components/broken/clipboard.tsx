import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenClipboard: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16v-3m13-8.998c2.175.012 3.353.108 4.121.877C21 5.757 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.108-4.121.877-.769.768-.865 1.946-.877 4.12M9 17.5h6"/><path stroke="${color}" stroke-width="1.5" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 14h1m7 0h-4m5-3.5h-2m-3 0H7"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenClipboard };
export default React.memo(BrokenClipboard);
