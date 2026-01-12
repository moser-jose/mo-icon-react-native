import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSkateboardingRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m3 17 .608.676A4 4 0 0 0 6.581 19H10m11-2-.608.676A4 4 0 0 1 17.419 19H14"/><circle cx="7" cy="21" r="1" fill="${color}"/><circle cx="17" cy="21" r="1" fill="${color}"/><circle cx="19" cy="4" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-2.134a1.85 1.85 0 0 0-.666-1.421l-.996-.83a1.59 1.59 0 0 1-.106-2.347l1.654-1.654a1.067 1.067 0 0 0-.335-1.736 4.27 4.27 0 0 0-3.943.304L8.5 7.999M11 14l-.621.621c-.434.434-.65.65-.926.765s-.583.114-1.196.114H7m9.5-5.5h3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSkateboardingRound };
export default React.memo(BrokenSkateboardingRound);
