import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWeigher: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M8 18h8"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m15.124 5.521.425.071a2 2 0 0 1 1.528 2.716l-.666 1.664a1.27 1.27 0 0 1-1.486.76 12.06 12.06 0 0 0-5.85 0 1.27 1.27 0 0 1-1.487-.76l-.665-1.664A2 2 0 0 1 8.45 5.592l.425-.07A19 19 0 0 1 11 5.288m-.82 4.642-.675-1.883"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenWeigher);
