import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenScissors: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.401 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path fill="${color}" d="M5 21.25a.75.75 0 0 1 0 1.5zM8.75 19v.75h-1.5V19zm-.498 1.868a.75.75 0 0 1-1.307-.736zm9.094-19.236a.75.75 0 0 1 1.308.736zM2.75 19A2.25 2.25 0 0 0 5 21.25v1.5A3.75 3.75 0 0 1 1.25 19zm4.5 0A2.25 2.25 0 0 0 5 16.75v-1.5A3.75 3.75 0 0 1 8.75 19zM5 16.75A2.25 2.25 0 0 0 2.75 19h-1.5A3.75 3.75 0 0 1 5 15.25zm1.945 3.382 10.401-18.5 1.308.736-10.402 18.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenScissors };
export default React.memo(BrokenScissors);
