import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBag4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.25 7.013V6a3.75 3.75 0 1 1 7.5 0v1.013c1.297.037 2.087.17 2.692.667.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079S18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098s-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143.606-.496 1.396-.63 2.693-.667M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM15 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldBag4 };
export default React.memo(BoldBag4);
