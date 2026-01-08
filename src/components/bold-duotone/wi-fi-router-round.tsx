import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWiFiRouterRound: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7 14a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"/><path fill="${color}" fill-rule="evenodd" d="M2 14.75a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5m2.75 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="${color}" d="m5.469 19.51-1.112 1.854a.75.75 0 0 0 1.286.771l1.432-2.385H7a5 5 0 0 1-1.531-.24m11.456.24 1.432 2.386a.75.75 0 1 0 1.286-.772l-1.112-1.853A5 5 0 0 1 17 19.75z" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M16.5 3.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 3.5" clip-rule="evenodd" opacity=".4"/><path fill="${color}" fill-rule="evenodd" d="M16.5 6a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 6" clip-rule="evenodd" opacity=".7"/><path fill="${color}" d="M17.5 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneWiFiRouterRound };
export default React.memo(BoldDuotoneWiFiRouterRound);
