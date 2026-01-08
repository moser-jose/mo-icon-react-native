import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMouseCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 14a4 4 0 0 1-8 0v-4a4 4 0 1 1 8 0m-7.5 0H16m-4 0V6"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 8.892V3.85c0-1.114-.905-2.037-1.987-1.817C5.442 2.962 2 7.034 2 11.917A10.1 10.1 0 0 0 3.362 17M16.364 2.842A10.09 10.09 0 0 1 22 11.917C22 17.486 17.523 22 12 22a9.9 9.9 0 0 1-5-1.349"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMouseCircle };
export default React.memo(BrokenMouseCircle);
