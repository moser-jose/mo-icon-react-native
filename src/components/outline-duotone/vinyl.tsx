import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneVinyl: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.95 13c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.478-10-10 0-5.186 3.947-9.45 9-9.951" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 2.457a10.02 10.02 0 0 1 6.542 6.542M15 12V2.456"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneVinyl);
