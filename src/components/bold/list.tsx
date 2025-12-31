import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldList: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17 3.25a.75.75 0 0 1 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 1 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4a.75.75 0 0 1 .6-.3M3.25 7A.75.75 0 0 1 4 6.25h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldList);
