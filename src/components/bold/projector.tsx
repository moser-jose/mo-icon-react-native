import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldProjector: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M4.614 20.643a.75.75 0 0 0 1.03-.257l1.431-2.387L8 18h8l.924-.001 1.433 2.387a.75.75 0 1 0 1.286-.772l-.997-1.661c1.174-.078 1.928-.285 2.475-.832C22 16.243 22 14.828 22 12s0-4.243-.879-5.121c-.326-.326-.726-.532-1.244-.66A6.5 6.5 0 1 1 8.233 6H8c-2.828-.001-4.243-.001-5.121.878S2 9.172 2 12s0 4.243.879 5.121c.547.547 1.301.754 2.475.832l-.997 1.661a.75.75 0 0 0 .257 1.03M5.5 8.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M14 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-.75-7a.75.75 0 0 1 .75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldProjector);
