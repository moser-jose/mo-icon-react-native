import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenFerrisWheel: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 11a2 2 0 1 1-2-2"/><path stroke="${color}" stroke-width="1.5" d="M20.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m18.5 22-3.333-6M10.5 13l-5 9"/><path stroke="${color}" stroke-width="1.5" d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenFerrisWheel);
