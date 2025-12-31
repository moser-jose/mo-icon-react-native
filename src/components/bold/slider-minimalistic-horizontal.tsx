import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSliderMinimalisticHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16 5.846c2.828 0 4.243 0 5.121.901C22 7.65 22 9.1 22 12s0 4.351-.879 5.253c-.878.9-2.293.9-5.121.9H8c-2.828 0-4.243 0-5.121-.9C2 16.35 2 14.9 2 12s0-4.351.879-5.253c.878-.9 2.293-.9 5.121-.9z"/><path fill="${color}" fill-rule="evenodd" d="M20.25 2.77a.76.76 0 0 1-.75.768h-15a.76.76 0 0 1-.75-.769A.76.76 0 0 1 4.5 2h15a.76.76 0 0 1 .75.77m0 18.46a.76.76 0 0 1-.75.77h-15a.76.76 0 0 1-.75-.77.76.76 0 0 1 .75-.768h15a.76.76 0 0 1 .75.769" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldSliderMinimalisticHorizontal);
