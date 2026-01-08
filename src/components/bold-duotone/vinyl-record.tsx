import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneVinylRecord: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142" opacity=".5"/><path fill="${color}" d="M17.127 6.874a.75.75 0 1 0-1.061 1.06 5.75 5.75 0 0 1 0 8.132.75.75 0 1 0 1.06 1.061 7.25 7.25 0 0 0 0-10.253M7.934 7.935a.75.75 0 0 0-1.06-1.061 7.25 7.25 0 0 0 0 10.253.75.75 0 0 0 1.06-1.06 5.75 5.75 0 0 1 0-8.132"/><path fill="${color}" fill-rule="evenodd" d="M9.348 9.349a3.75 3.75 0 1 1 5.304 5.303A3.75 3.75 0 0 1 9.348 9.35m1.061 1.06a2.25 2.25 0 1 1 3.182 3.183 2.25 2.25 0 0 1-3.182-3.183" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneVinylRecord };
export default React.memo(BoldDuotoneVinylRecord);
