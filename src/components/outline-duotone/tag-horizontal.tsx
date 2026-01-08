import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTagHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.721 20h2.637c2.227 0 3.341 0 4.27-.533.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379s-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C15.699 3 14.585 3 12.358 3H9.721C5.846 3 3.908 3 2.704 4.245S1.5 7.493 1.5 11.5s0 6.01 1.204 7.255S5.846 20 9.72 20Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6.5 6.996v9.005" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTagHorizontal };
export default React.memo(OutlineDuotoneTagHorizontal);
