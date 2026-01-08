import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenDisplay: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 10V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.879-.3.3-.498.662-.628 1.121M2 9v1c0 2.828 0 4.243.879 5.121C3.757 16 5.172 16 8 16h8c2.828 0 4.243 0 5.121-.879.3-.3.498-.662.628-1.121M12 19v-2.5m0 2.5 6 2m-6-2-6 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenDisplay };
export default React.memo(BrokenDisplay);
