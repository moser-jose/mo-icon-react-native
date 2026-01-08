import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldRadialBlur: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17 20.66C12.217 23.421 6.1 21.783 3.34 17 .577 12.217 2.216 6.1 7 3.34a9.96 9.96 0 0 1 6.195-1.27A9.99 9.99 0 0 1 20.66 7a9.99 9.99 0 0 1 .536 8.929A9.96 9.96 0 0 1 17 20.66M14.25 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m0 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M9.75 11a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.75 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0-12.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m8.5 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M6.5 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m11.75 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-11.75.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldRadialBlur };
export default React.memo(BoldRadialBlur);
