import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUserBlockRounded: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m19.95 16.05-3.9 3.9"/><circle cx="18" cy="18" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 20.96q-.49.04-1 .04c-3.866 0-7-1.79-7-4 0-.345.077-.68.22-1m9.28-2.737c-.776-.17-1.62-.263-2.5-.263-1.074 0-2.09.138-3 .385"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenUserBlockRounded };
export default React.memo(BrokenUserBlockRounded);
