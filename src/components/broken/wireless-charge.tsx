import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWirelessCharge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.25 22a.75.75 0 0 0 1.5 0zm0-1v1h1.5v-1z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.857 7 10 10h4l-2.857 3"/><path stroke="${color}" stroke-width="1.5" d="M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4.582 7A8 8 0 1 0 9 2.582"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenWirelessCharge);
