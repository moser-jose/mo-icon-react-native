import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWatchSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3.077L14 14"/><path stroke="${color}" stroke-width="1.5" d="m16.778 5.5-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44-.549.44-.715 1.19-1.05 2.692l-.08.368"/><path stroke="${color}" stroke-width="1.5" d="m16.778 5.5-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44-.549.44-.715 1.19-1.05 2.692l-.08.368m9.555 13-.082.368c-.334 1.501-.5 2.252-1.049 2.692s-1.318.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44-.549-.44-.715-1.19-1.05-2.692l-.08-.368"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18.961 9.2c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025 5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenWatchSquare };
export default React.memo(BrokenWatchSquare);
