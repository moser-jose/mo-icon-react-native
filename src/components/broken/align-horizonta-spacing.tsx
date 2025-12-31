import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAlignHorizontaSpacing: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 2v20m18-12v12m0-20v4M8 15v1c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4s-2.828 0-3.414.586S8 6.114 8 8v3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenAlignHorizontaSpacing);
