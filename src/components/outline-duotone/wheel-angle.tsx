import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWheelAngle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M16.5 22c2.485 0 4.5-4.477 4.5-10S18.985 2 16.5 2M12 12c0 5.523-2.015 10-4.5 10S3 17.523 3 12 5.015 2 7.5 2 12 6.477 12 12ZM7.5 2h9m-9 20h9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 12c0 3.314-.672 6-1.5 6S6 15.314 6 12s.672-6 1.5-6S9 8.686 9 12Zm0 0H8" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneWheelAngle };
export default React.memo(OutlineDuotoneWheelAngle);
