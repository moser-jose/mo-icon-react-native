import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBluetoothSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m11 12 2.933-2.2c.49-.367.734-.55.734-.8s-.245-.434-.734-.8l-1.333-1c-.698-.524-1.047-.786-1.324-.648C11 6.69 11 7.127 11 8zm0 0v4c0 .872 0 1.308.276 1.447.277.138.626-.124 1.324-.648l1.333-1c.49-.366.734-.55.734-.8s-.245-.433-.734-.8zm0 0L8 9.5m3 2.5-3 2.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneBluetoothSquare);
