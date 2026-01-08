import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTuning3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" stroke="${color}" stroke-width="1.5" transform="rotate(180 12 12)"/><circle cx="20" cy="14" r="2" stroke="${color}" stroke-width="1.5" transform="rotate(180 20 14)"/><circle cx="2" cy="2" r="2" stroke="${color}" stroke-width="1.5" transform="matrix(-1 0 0 1 6 8)"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4 12v2.75M4 19v-1.5M20 12V9.25M20 5v1.5M12 19v-5m8 5v-3M4 5v2.667M12 10V7.5M12 5v.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTuning3 };
export default React.memo(BrokenTuning3);
