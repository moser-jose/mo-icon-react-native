import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineCircleTopDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M21.25 12A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 0-1.5C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0"/><path fill="${color}" d="M21.53 3.53a.75.75 0 0 0-1.06-1.06l-7.72 7.72V6.655a.75.75 0 0 0-1.5 0V12c0 .414.336.75.75.75h5.344a.75.75 0 0 0 0-1.5H13.81z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineCircleTopDown };
export default React.memo(OutlineCircleTopDown);
