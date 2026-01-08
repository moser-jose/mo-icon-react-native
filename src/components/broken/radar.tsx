import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRadar: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.412 21.658q.796.212 1.588.292c4.795.488 9.372-2.558 10.66-7.363 1.429-5.335-1.737-10.818-7.072-12.248a9.97 9.97 0 0 0-7.501.95M12 11.999 5.002 6.334c-.43-.347-1.063-.283-1.366.179A10 10 0 0 0 2.341 9.41a10 10 0 0 0 2.661 9.734"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenRadar };
export default React.memo(BrokenRadar);
