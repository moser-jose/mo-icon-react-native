import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenScreencast: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 20c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12v-1M2 8.5c0-.464 0-.697.02-.892a4 4 0 0 1 3.588-3.589C5.803 4 6.036 4 6.5 4H14c3.771 0 5.657 0 6.828 1.172.47.47.751 1.054.92 1.828"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 20a9 9 0 0 0-9-9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 20a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenScreencast);
