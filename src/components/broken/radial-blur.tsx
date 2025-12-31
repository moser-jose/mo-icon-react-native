import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRadialBlur: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-4.5 4.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/><path fill="${color}" d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/><path fill="${color}" d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-4.5 12.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m12.5 4.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-12.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenRadialBlur);
