import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWiFiRouter: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M2 15c0-1.886 0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 11 3 4m14 7 4-7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 15h4" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17.167 5.397A5.502 5.502 0 0 0 7 5.397" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0" opacity=".7"/><path fill="${color}" d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneWiFiRouter };
export default React.memo(OutlineDuotoneWiFiRouter);
