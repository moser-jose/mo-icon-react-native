import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPieChart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M9.163 3.775a.75.75 0 0 1-.49.94A8.465 8.465 0 0 0 2.75 12.79a8.46 8.46 0 0 0 8.46 8.461 8.465 8.465 0 0 0 8.075-5.922.75.75 0 1 1 1.43.45c-1.268 4.04-5.043 6.972-9.504 6.972-5.501 0-9.961-4.46-9.961-9.96 0-4.462 2.932-8.236 6.973-9.505a.75.75 0 0 1 .94.49" clip-rule="evenodd"/><path fill="${color}" d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldPieChart);
