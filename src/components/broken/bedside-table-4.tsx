import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBedsideTable4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5m7-.5V8m3 4v3m-6-3v3m3-13h-2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12v-2c0-3.771 0-5.657-1.172-6.828-.943-.944-2.348-1.127-4.828-1.163M2 8h3m17 0H9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBedsideTable4);
