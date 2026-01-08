import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBuildings: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 22H2m19 0v-9m-9.996-8c.018-1.24.11-1.943.582-2.414C12.172 2 13.114 2 15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 22v-6M3 22v-9m0-4c0-1.886 0-2.828.586-3.414S5.114 5 7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v3M9 22v-3M6 8h6m-6 3h1m5 0H9.5M6 14h6"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBuildings };
export default React.memo(BrokenBuildings);
