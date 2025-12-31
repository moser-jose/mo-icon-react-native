import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBlackHole3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 10c5 0 4.6 12-3 12" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12.312 14c-5 0-4.6-12 3-12" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 12.313c0-5 12-4.6 12 3" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 12c0 5-12 4.6-12-3" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneBlackHole3);
