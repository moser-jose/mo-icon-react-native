import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldVinylRecord: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142M17.126 6.873a.75.75 0 1 0-1.06 1.061 5.75 5.75 0 0 1 0 8.132.75.75 0 1 0 1.06 1.06 7.25 7.25 0 0 0 0-10.253M9.349 9.348a3.75 3.75 0 1 1 5.304 5.304 3.75 3.75 0 0 1-5.304-5.304m1.061 1.061a2.25 2.25 0 1 1 3.182 3.182 2.25 2.25 0 0 1-3.182-3.182M7.934 7.934a.75.75 0 0 0-1.06-1.06 7.25 7.25 0 0 0 0 10.253.75.75 0 0 0 1.06-1.061 5.75 5.75 0 0 1 0-8.132" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldVinylRecord };
export default React.memo(BoldVinylRecord);
