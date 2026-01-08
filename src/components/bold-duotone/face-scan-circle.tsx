import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFaceScanCircle: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.801 2.57a.71.71 0 0 1-.555.838 8.78 8.78 0 0 0-6.838 6.838.71.71 0 1 1-1.394-.283 10.2 10.2 0 0 1 7.949-7.949.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555 8.78 8.78 0 0 0 6.838 6.838.71.71 0 1 1-.283 1.394 10.2 10.2 0 0 1-7.948-7.949.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556 10.2 10.2 0 0 1 7.949 7.949.711.711 0 0 1-1.394.283 8.78 8.78 0 0 0-6.838-6.838.71.71 0 0 1-.555-.838m8.231 10.629a.71.71 0 0 1 .556.838 10.2 10.2 0 0 1-7.949 7.949.711.711 0 0 1-.283-1.394 8.78 8.78 0 0 0 6.838-6.838.71.71 0 0 1 .838-.555" clip-rule="evenodd"/><path fill="${color}" d="M12 19.584a7.583 7.583 0 1 0 0-15.166 7.583 7.583 0 0 0 0 15.166" opacity=".5"/><path fill="${color}" d="M8.94 14.539a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69.71.71 0 1 1 .847 1.142 4.87 4.87 0 0 1-2.912.97 4.87 4.87 0 0 1-2.911-.97.71.71 0 0 1-.148-.994m5.547-2.895c.458 0 .83-.557.83-1.244s-.372-1.244-.83-1.244-.83.557-.83 1.244.372 1.244.83 1.244m-4.976 0c.458 0 .83-.557.83-1.244s-.372-1.244-.83-1.244-.83.557-.83 1.244.372 1.244.83 1.244"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneFaceScanCircle };
export default React.memo(BoldDuotoneFaceScanCircle);
