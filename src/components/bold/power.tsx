import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPower: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v4"/><path fill="${color}" d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"/><path fill="${color}" d="M8.792 5.147a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 21 8.25 8.25 0 0 1 8.792 5.147"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPower };
export default React.memo(BoldPower);
