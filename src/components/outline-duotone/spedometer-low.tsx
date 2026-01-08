import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSpedometerLow: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.445-.756 1.37-.971 2.346-.32 1.458-.481 2.188.1 2.769.58.58 1.31.42 2.768.099.975-.215 1.9-.526 2.346-.972Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSpedometerLow };
export default React.memo(OutlineDuotoneSpedometerLow);
