import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenFlame: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.37 8c.992-1.524 1.974-3.09 2.586-4.623.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15c0 1.174-.2 2.166-.53 3M5.466 11C4.613 12.454 4 13.813 4 15c0 3.107 2.246 5.309 4.081 6.372.421.243.83-.265.61-.698-.486-.953-.958-2.185-.958-3.174 0-1.371 1.045-2.473 1.792-3.18.191-.181.491-.178.657.026.308.38.616.862.924 1.252a.413.413 0 0 0 .677-.036c.986-1.52 1.215-3.459 1.268-4.908.016-.438.528-.652.821-.328C15.156 11.746 16.8 14.05 16.8 16c0 1.816-1.018 3.746-1.898 5.012-.258.37.025.873.457.74a7 7 0 0 0 1.606-.74"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenFlame };
export default React.memo(BrokenFlame);
