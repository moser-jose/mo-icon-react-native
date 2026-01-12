import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWatchSquareMinimalisticCharge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.857 9 10 12h4l-2.857 3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 2h10M7 22h10m1.961-12.8c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025 5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenWatchSquareMinimalisticCharge };
export default React.memo(BrokenWatchSquareMinimalisticCharge);
