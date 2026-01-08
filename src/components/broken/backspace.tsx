import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBackspace: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 3.771 0 5.657-1.204 6.828S17.654 20 13.78 20h-2.637c-2.227 0-3.341 0-4.27-.501-.93-.502-1.52-1.42-2.701-3.259l-.681-1.06C2.497 13.634 2 12.86 2 12s.497-1.634 1.49-3.18l.68-1.06c1.181-1.838 1.771-2.757 2.701-3.259S8.915 4 11.142 4h2.637c3.875 0 5.813 0 7.017 1.172.671.653.968 1.528 1.1 2.828M15.5 9.5l-5 5m0-5 5 5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBackspace };
export default React.memo(BrokenBackspace);
