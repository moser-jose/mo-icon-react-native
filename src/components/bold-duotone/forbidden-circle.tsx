import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneForbiddenCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0 3.905-10.237 0-14.142-10.237-3.905-14.142 0" opacity=".5"/><path fill="${color}" d="M18.521 4.418 4.418 18.521a10 10 0 0 0 1.06 1.06L19.583 5.48a10 10 0 0 0-1.06-1.061"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneForbiddenCircle);
