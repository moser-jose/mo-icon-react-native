import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRewind10SecondsBack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09"/><path fill="${color}" fill-rule="evenodd" d="M14.25 7.75a2.5 2.5 0 0 0-2.5 2.5v3.5a2.5 2.5 0 0 0 5 0v-3.5a2.5 2.5 0 0 0-2.5-2.5m0 1.5a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535 0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRewind10SecondsBack };
export default React.memo(BoldDuotoneRewind10SecondsBack);
