import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCloset: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 22v-.5M5 22v-.5m7-.5v-7m0-12v8m3-2v2m7 1v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-3c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172.809.808 1.06 1.956 1.137 3.828M2 8h10M2 15h20m-7 3h2M7 18h2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenCloset);
