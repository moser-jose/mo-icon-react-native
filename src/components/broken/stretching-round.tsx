import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenStretchingRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="14.5" cy="4.5" r="2.5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 21.995v-3.947c0-1.776-1.605-3.13-3.373-2.844m-7.679-1.77-.025-.024c-1.042-1.007-.237-2.626.67-3.268.907-.643 4.752-1.643 4.752 3.292a8.74 8.74 0 0 1-1.302 4.614M5 21.999c1.46 0 2.82-.374 4-1.032"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenStretchingRound };
export default React.memo(BrokenStretchingRound);
