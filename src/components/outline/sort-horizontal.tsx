import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineSortHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.663 3.478a.75.75 0 0 1-.016 1.06L7.851 7.25H18a.75.75 0 0 1 0 1.5H7.85l2.797 2.712a.75.75 0 1 1-1.044 1.076l-4.125-4a.75.75 0 0 1 0-1.076l4.125-4a.75.75 0 0 1 1.06.016m2.674 8a.75.75 0 0 1 1.06-.016l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4a.75.75 0 1 1-1.044-1.076l2.796-2.712H6a.75.75 0 0 1 0-1.5h10.15l-2.797-2.712a.75.75 0 0 1-.016-1.06" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineSortHorizontal };
export default React.memo(OutlineSortHorizontal);
