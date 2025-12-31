import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPaletteRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-6"/><path stroke="${color}" stroke-width="1.5" d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"/><path fill="${color}" d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-9 4.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18zm1.5 0A4.75 4.75 0 0 0 18 13.25v1.5A3.25 3.25 0 0 1 21.25 18zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"/><path stroke="${color}" stroke-width="1.5" d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenPaletteRound);
