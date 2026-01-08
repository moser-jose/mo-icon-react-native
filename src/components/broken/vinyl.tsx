import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenVinyl: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.95 13c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.478-10-10 0-1.822.487-3.53 1.338-5M11 2.048a9.9 9.9 0 0 0-4 1.288"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12V2.456a10.02 10.02 0 0 1 6.542 6.542"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenVinyl };
export default React.memo(BrokenVinyl);
