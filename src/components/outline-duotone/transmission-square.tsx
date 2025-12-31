import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTransmissionSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 9v6m4-6v6m-4-3h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C16 10.398 16 9.932 16 9"/><rect x="2" y="2" stroke="${color}" stroke-width="1.5" opacity=".5" rx="5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneTransmissionSquare);
