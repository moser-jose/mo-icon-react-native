import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWaterSun: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 16.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 15.366 3.684 16.376 2 16.773" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 21.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 20.876 14.485 22 12 22c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 20.366 3.684 21.376 2 21.773"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1m10 9h-1M3 12H2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m19.07 4.93-.393.393M5.322 5.322 4.93 4.93" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneWaterSun);
