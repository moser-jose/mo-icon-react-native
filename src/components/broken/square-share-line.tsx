import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSquareShareLine: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7h-8c-1.818 0-2.913.892-3.32 1.3q-.187.19-.19.19 0 .003-.19.19C9.892 9.087 9 10.182 9 12v3m13-8-5-5m5 5-5 5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3.465 20.535C4.93 22 7.287 22 12.003 22c4.715 0 7.073 0 8.537-1.465 1.242-1.241 1.431-3.123 1.46-6.537M3.465 20.535C2 19.07 2 16.713 2 11.997m1.465 8.538C4.929 22 7.286 22 12 22s7.071 0 8.535-1.465c1.241-1.24 1.43-3.122 1.46-6.536m-18.53 6.536C2 19.071 2 16.714 2 12m1.465-8.54C4.706 2.218 6.588 2.029 10.002 2M2.055 8c.11-2.193.436-3.562 1.41-4.536 1.24-1.24 3.122-1.43 6.535-1.459"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenSquareShareLine);
