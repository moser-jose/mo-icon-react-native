import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneHospital: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"/><path stroke="${color}" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"/><path stroke="${color}" stroke-width="1.5" d="M21 22V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 12h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9V5m2 2h-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneHospital };
export default React.memo(OutlineDuotoneHospital);
