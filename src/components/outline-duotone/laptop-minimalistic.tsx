import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneLaptopMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h6c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v5c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 21H2m13-6H9" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneLaptopMinimalistic };
export default React.memo(OutlineDuotoneLaptopMinimalistic);
