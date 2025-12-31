import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAlarmSleep: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.5 4.5 4-2.5m13 2.5-4-2.5M9 10h6l-6 6h6"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.5 5.204A9 9 0 1 1 4.204 8.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenAlarmSleep);
