import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneLadle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 5.684a3.684 3.684 0 0 1 7.368 0V15" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0v-1.052M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.632-.988-6.632-2.368M22 14.5c0-1.38-2.946-2.5-6-2.5s-6.632 1.25-6.632 2.632"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneLadle);
