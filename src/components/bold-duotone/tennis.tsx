import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTennis: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13.196 2.07A9.96 9.96 0 0 0 7 3.34a9.95 9.95 0 0 0-4.07 4.45c1.016.721 3.634 2.793 5.607 6.21a18.5 18.5 0 0 1 1.08 2.199q.133.323.246.633c1.068 2.929.945 5.051.942 5.097A9.96 9.96 0 0 0 17 20.66a9.96 9.96 0 0 0 4.197-4.731S17.964 14.33 15.464 10s-2.268-7.93-2.268-7.93"/><path fill="${color}" d="m3.83 17.767.043.06a10 10 0 0 0 1.825 1.94 10.03 10.03 0 0 0 5.106 2.161c.004-.055.124-2.175-.942-5.096a18 18 0 0 0-.888-2.03A19 19 0 0 0 8.536 14c-1.973-3.418-4.59-5.49-5.607-6.211a9.99 9.99 0 0 0 .901 9.978M20.66 7a9.99 9.99 0 0 0-7.464-4.93s-.232 3.6 2.268 7.93 5.733 5.928 5.733 5.928a9.99 9.99 0 0 0-.537-8.929" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneTennis);
