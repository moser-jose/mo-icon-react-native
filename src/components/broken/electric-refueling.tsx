import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenElectricRefueling: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 22v-7M3 22v-4m0-4V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h1c2.828 0 4.243 0 5.121.879C16 3.757 16 5.172 16 8v3"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 10 8 12.5h3L9.5 15"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 22H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 0 1 .992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 0 1-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 8h-1.5A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423L22 14"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenElectricRefueling);
