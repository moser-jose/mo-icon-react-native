import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRewind10SecondsBack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.5 10.5 2.5-2v7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 4.5 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-3.999M8 2.832A10 10 0 0 0 5 4.86 9.97 9.97 0 0 0 2 12q.002 1.03.2 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenRewind10SecondsBack);
