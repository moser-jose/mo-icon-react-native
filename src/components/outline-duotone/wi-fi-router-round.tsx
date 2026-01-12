import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWiFiRouterRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Z"/><path fill="${color}" d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2 1 2 1.34-.67-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2-1 2-1.34-.67 1-2z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M8.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 15h6.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.583 5.397a5.502 5.502 0 0 0-10.167 0" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0" opacity=".7"/><path fill="${color}" d="M17.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneWiFiRouterRound };
export default React.memo(OutlineDuotoneWiFiRouterRound);
