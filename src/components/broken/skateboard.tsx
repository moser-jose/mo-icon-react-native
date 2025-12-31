import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSkateboard: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m2 7 .813 1.219A4 4 0 0 0 6.14 10H12m10-3-.812 1.219A4 4 0 0 1 17.859 10H16"/><circle cx="7" cy="15" r="2" stroke="${color}" stroke-width="1.5"/><circle cx="17" cy="15" r="2" stroke="${color}" stroke-width="1.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenSkateboard);
