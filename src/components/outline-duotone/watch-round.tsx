import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWatchRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m17 6.5-.304-1.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44-.549.44-.715 1.19-1.05 2.692L7 6.5m10 11-.304 1.368c-.334 1.501-.5 2.252-1.049 2.692s-1.317.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44-.549-.44-.715-1.19-1.05-2.692L7 17.5" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.923V12l2 1.923" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneWatchRound);
