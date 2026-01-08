import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPlaaylistMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 16H3m7-5H3"/><path stroke="${color}" stroke-width="1.5" d="M19.125 10.686c1.642.948 2.463 1.422 2.723 2.049a2 2 0 0 1 0 1.53c-.26.628-1.081 1.102-2.723 2.05s-2.463 1.422-3.136 1.333a2 2 0 0 1-1.326-.765c-.413-.539-.413-1.487-.413-3.383s0-2.844.413-3.382a2 2 0 0 1 1.326-.766c.673-.088 1.494.386 3.136 1.334Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 6H9.5M3 6h2.25"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenPlaaylistMinimalistic };
export default React.memo(BrokenPlaaylistMinimalistic);
