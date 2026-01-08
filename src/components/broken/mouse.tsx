import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMouse: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2"/><path stroke="${color}" stroke-width="1.5" d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMouse };
export default React.memo(BrokenMouse);
