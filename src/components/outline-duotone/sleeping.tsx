import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSleeping: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 6v12m20 0v-2.357c0-1.995 0-2.993-.28-3.794a5 5 0 0 0-3.07-3.069c-.8-.28-1.798-.28-3.793-.28-.798 0-1.197 0-1.518.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20"/><path stroke="${color}" stroke-width="1.5" d="M9.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSleeping };
export default React.memo(OutlineDuotoneSleeping);
