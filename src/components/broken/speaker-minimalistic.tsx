import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSpeakerMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 12v2c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828"/><path stroke="${color}" stroke-width="1.5" d="M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 6h4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSpeakerMinimalistic };
export default React.memo(BrokenSpeakerMinimalistic);
