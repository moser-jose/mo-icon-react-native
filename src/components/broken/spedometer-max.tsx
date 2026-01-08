import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSpedometerMax: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"/><path stroke="${color}" stroke-width="1.5" d="M10.121 14.364a3 3 0 1 1 4.243-4.243c.446.445.757 1.37.971 2.346.321 1.458.482 2.188-.099 2.769-.58.58-1.31.42-2.769.099-.975-.215-1.9-.526-2.346-.972Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 21.542C4.943 20.268 2 16.478 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSpedometerMax };
export default React.memo(BrokenSpedometerMax);
