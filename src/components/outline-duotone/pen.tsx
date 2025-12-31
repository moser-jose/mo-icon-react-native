import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePen: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m15.287 3.152-.927.927-8.521 8.52c-.577.578-.866.867-1.114 1.185a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.094 3.281-.268.802a1.06 1.06 0 0 0 1.342 1.342l.802-.268 3.281-1.094c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114l8.521-8.521.927-.927a3.932 3.932 0 0 0-5.561-5.561Z"/><path stroke="${color}" stroke-width="1.5" d="M14.36 4.078s.116 1.97 1.854 3.708 3.707 1.853 3.707 1.853M4.198 21.678l-1.876-1.876" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotonePen);
