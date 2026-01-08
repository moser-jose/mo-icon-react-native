import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTemperature: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 6V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86a5.5 5.5 0 1 0 6.877 0c-.263-.212-.438-.522-.438-.86V10"/><path stroke="${color}" stroke-width="1.5" d="M14.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 14v-2m0-7v3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTemperature };
export default React.memo(BrokenTemperature);
