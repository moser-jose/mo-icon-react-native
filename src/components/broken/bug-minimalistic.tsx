import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBugMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22a7 7 0 0 1-7-7v-5a7 7 0 0 1 14 0v5a6.98 6.98 0 0 1-2.101 5M19 13h3M5 13H2m18.5-6-1.798.72M3.5 7l1.798.72M14.5 3.5 17 2M9.5 3.5 7 2m13.5 17-2-.8m-15 .8 2-.8m5-7.7h3m-3 5h3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBugMinimalistic };
export default React.memo(BrokenBugMinimalistic);
