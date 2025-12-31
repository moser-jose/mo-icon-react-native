import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenLinkMinimalistic2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m14.163 18.488-.721.72a6.117 6.117 0 1 1-8.65-8.65l.72-.72m4.325 4.325 4.326-4.325M9.837 5.512l.721-.72a6.117 6.117 0 0 1 8.65 0m-.72 9.37.72-.72A6.1 6.1 0 0 0 20.998 9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenLinkMinimalistic2);
