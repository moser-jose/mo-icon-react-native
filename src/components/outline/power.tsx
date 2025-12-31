import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlinePower: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"/><path fill="${color}" d="M8.792 4.397a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 20.25 8.25 8.25 0 0 1 8.792 4.397"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlinePower);
