import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldFilters: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"/><path fill="${color}" d="M5.033 10.784a6 6 0 1 0 8.92 4.46 7.5 7.5 0 0 1-8.92-4.46m10.354 3.91q.112.636.113 1.306c0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558 7.53 7.53 0 0 1-3.58 3.91"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldFilters };
export default React.memo(BoldFilters);
