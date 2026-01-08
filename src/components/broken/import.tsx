import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenImport: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v10m0 0 3-3m-3 3-3-3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenImport };
export default React.memo(BrokenImport);
