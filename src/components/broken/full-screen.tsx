import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenFullScreen: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172A3 3 0 0 0 2.585 4M2 10c0-.735 0-1.4.009-2M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10m-8 12c3.771 0 5.657 0 6.828-1.172a3 3 0 0 0 .587-.828M22 14c0 .736 0 1.4-.009 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenFullScreen };
export default React.memo(BrokenFullScreen);
