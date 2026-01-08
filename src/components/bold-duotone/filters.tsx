import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFilters: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"/><path fill="${color}" d="M13.58 13.79a6 6 0 0 1-7.16-3.58 6 6 0 1 0 7.16 3.58" opacity=".7"/><path fill="${color}" d="M13.58 13.79c.271.684.42 1.43.42 2.21a6 6 0 0 1-2 4.472 6 6 0 1 0 5.58-10.262 6.01 6.01 0 0 1-4 3.58" opacity=".4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneFilters };
export default React.memo(BoldDuotoneFilters);
