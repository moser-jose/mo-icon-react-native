import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneArrowToTopLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17.53 10.03a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06L12 5.56l4.47 4.47a.75.75 0 0 0 1.06 0" clip-rule="evenodd"/><path fill="${color}" d="M12.75 14.5c0 .953-.28 2.367-1.141 3.563-.89 1.235-2.365 2.187-4.609 2.187a.75.75 0 0 1 0-1.5c1.756 0 2.78-.715 3.391-1.563.639-.887.859-1.974.859-2.687V6.31l.75-.75.75.75zm-.552-10.724" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneArrowToTopLeft };
export default React.memo(BoldDuotoneArrowToTopLeft);
