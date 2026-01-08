import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFacemaskCircle: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M21.998 12.193 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q0 .195.007.386l4.98 1.81 2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192z" opacity=".5"/><path fill="${color}" d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5m-.234 10.767.444-5.776-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A10 10 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733m6.058-7.388-4.112 1.644-.38 4.94a10 10 0 0 0 4.492-6.584M6.668 20.462 6.29 15.54l-4.077-1.482a10 10 0 0 0 4.456 6.404"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneFacemaskCircle };
export default React.memo(BoldDuotoneFacemaskCircle);
