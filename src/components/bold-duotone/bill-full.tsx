import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBillFull: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M17.625 20.592a1.754 1.754 0 0 1 2.25 0c.436.37 1.125.074 1.125-.483V3.891c0-.557-.69-.853-1.125-.483a1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0C3.689 3.038 3 3.334 3 3.891v16.218c0 .557.69.853 1.125.483a1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0" opacity=".5"/><path fill="${color}" d="M6.75 15.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m0-3.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m0-3.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBillFull);
