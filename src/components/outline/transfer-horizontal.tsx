import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTransferHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.007 3.447a.75.75 0 0 1 .046 1.06L5.705 9.25H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.553-1.257l5.5-6a.75.75 0 0 1 1.06-.046m10.68 10.251A.75.75 0 0 0 20 13.25H4a.75.75 0 0 0 0 1.5h14.295l-4.348 4.743a.75.75 0 0 0 1.106 1.014l5.5-6a.75.75 0 0 0 .133-.809" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTransferHorizontal);
