import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneStopCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M8 12c0-1.886 0-2.828.586-3.414S10.114 8 12 8s2.828 0 3.414.586S16 10.114 16 12s0 2.828-.586 3.414S13.886 16 12 16s-2.828 0-3.414-.586S8 13.886 8 12Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneStopCircle };
export default React.memo(OutlineDuotoneStopCircle);
