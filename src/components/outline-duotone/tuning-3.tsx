import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTuning3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" stroke="${color}" stroke-width="1.5" transform="rotate(180 12 12)"/><circle cx="20" cy="14" r="2" stroke="${color}" stroke-width="1.5" transform="rotate(180 20 14)"/><circle cx="2" cy="2" r="2" stroke="${color}" stroke-width="1.5" transform="matrix(-1 0 0 1 6 8)"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 12V5M4 12v7m8 0v-5m8 5v-3m-8-6V5M4 5v2.667" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTuning3 };
export default React.memo(OutlineDuotoneTuning3);
