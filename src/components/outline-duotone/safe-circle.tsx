import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSafeCircle: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 8v8" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m16 10 1-1m-6 6 1-1m0-4-1-1m6 6-1-1" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSafeCircle };
export default React.memo(OutlineDuotoneSafeCircle);
