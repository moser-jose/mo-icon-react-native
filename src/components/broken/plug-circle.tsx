import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPlugCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.108v5.042c0 1.114-.905 2.038-1.987 1.817C5.442 21.038 2 16.966 2 12.083A10.1 10.1 0 0 1 3.362 7m13.002 14.158A10.09 10.09 0 0 0 22 12.083C22 6.514 17.523 2 12 2a9.9 9.9 0 0 0-5 1.349"/><path stroke="${color}" stroke-width="1.5" d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.5 11V9m-3 2V9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenPlugCircle };
export default React.memo(BrokenPlugCircle);
