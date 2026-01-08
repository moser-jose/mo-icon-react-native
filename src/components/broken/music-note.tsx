import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMusicNote: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 19V8"/><path fill="${color}" d="M20.25 11.5a.75.75 0 0 0 1.5 0zm1.5 0V6h-1.5v5.5z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m15.735 3.756-4 1.333c-1.32.44-1.98.66-2.357 1.184S9 7.493 9 8.883v3.118l12-4v-.45c0-2.533 0-3.8-.83-4.398-.831-.599-2.032-.198-4.435.603Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMusicNote };
export default React.memo(BrokenMusicNote);
