import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenScanner: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 22H9m-7-7c0 3.771 0 4.657 1.172 5.828.653.654 1.528.943 2.828 1.07M22 15c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22m0-20h1m7 7c0-3.771 0-4.657-1.172-5.828-.653-.654-1.528-.943-2.828-1.07M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9m0 3h6m14 0H12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenScanner };
export default React.memo(BrokenScanner);
