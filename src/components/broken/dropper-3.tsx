import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenDropper3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 16h-4"/><path stroke="${color}" stroke-width="1.5" d="M18 11.417c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 21v1m-6-12c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V14"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 22v-2M18.5 2l-.523.523-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6m0-2.564a3 3 0 0 1-2.07-.66l-.078-.066-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenDropper3 };
export default React.memo(BrokenDropper3);
