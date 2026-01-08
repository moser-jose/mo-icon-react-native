import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUserCheck: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="11" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 10.3 1.333 1.2L21 8.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18.998 18q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S3 22 11 22c2.231 0 3.84-.157 5-.437"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenUserCheck };
export default React.memo(BrokenUserCheck);
