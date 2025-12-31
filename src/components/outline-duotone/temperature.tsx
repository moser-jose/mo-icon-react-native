import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTemperature: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 22a5.5 5.5 0 0 0 3.439-9.793 1.11 1.11 0 0 1-.439-.86V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0 0 12 22Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneTemperature);
