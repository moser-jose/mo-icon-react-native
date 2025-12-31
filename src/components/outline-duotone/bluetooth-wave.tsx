import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBluetoothWave: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M13.263 8.262 8 12V5.225c0-1.887 0-2.83.605-3.14.604-.309 1.376.24 2.92 1.336l1.738 1.234C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803Zm0 11.083-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54s-.579.982-1.737 1.804Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 15.5 8 12 3 8.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 5s2 2.1 2 7-2 7-2 7" opacity=".7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 8s1 1.9 1 4-1 4-1 4" opacity=".4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneBluetoothWave);
