import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBicycling: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="15" cy="4" r="2" stroke="${color}" stroke-width="1.5"/><circle cx="6" cy="18" r="3" stroke="${color}" stroke-width="1.5" opacity=".4"/><circle cx="18" cy="18" r="3" stroke="${color}" stroke-width="1.5" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127-.465.042-.78.497-1.411 1.406L7.388 9.727c-.642.925-.963 1.388-.835 1.843.13.455.646.68 1.678 1.13l1.476.644c1.364.595 2.046.893 2.374 1.493s.21 1.335-.024 2.804L12 18"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneBicycling);
