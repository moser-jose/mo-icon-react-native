import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBluetoothCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m11 12 3.2-2.407c.533-.401.8-.602.8-.875 0-.274-.267-.475-.8-.876l-1.454-1.094c-.762-.573-1.143-.86-1.444-.708C11 6.191 11 6.669 11 7.623zm0 0v4.377c0 .954 0 1.432.302 1.583.301.151.682-.135 1.444-.708l1.454-1.094c.533-.402.8-.602.8-.876 0-.273-.267-.474-.8-.875zm0 0L8 9.5m3 2.5-3 2.5" opacity=".5"/><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBluetoothCircle };
export default React.memo(OutlineDuotoneBluetoothCircle);
