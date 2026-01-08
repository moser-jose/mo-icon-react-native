import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTuning: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M14 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-10-5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 13v5m0 3v1m10-11V6m0-3V2m0 20v-4M7 2v4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTuning };
export default React.memo(BrokenTuning);
