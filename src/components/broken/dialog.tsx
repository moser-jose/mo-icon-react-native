import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenDialog: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 7.07A8 8 0 0 0 2.835 17.562c.142.285.189.61.107.918l-.477 1.781a1.04 1.04 0 0 0 1.274 1.274l1.78-.477a1.3 1.3 0 0 1 .919.107A8 8 0 0 0 16.93 10"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m18 14.502.198-.087c.362-.165.768-.227 1.153-.124l.476.127a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 0 0 22 8.5a6.47 6.47 0 0 0-1-3.466m-11.5.962A6.502 6.502 0 0 1 19 3.022"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.518 14h.01m3.481 0h.009m3.482 0h.009"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenDialog);
