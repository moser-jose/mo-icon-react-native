import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMirrorLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 12c0 4.243 0 6.364 1.318 7.682S7.758 21 12 21m0-18C7.757 3 5.636 3 4.318 4.318 3.502 5.134 3.192 6.257 3.073 8"/><path stroke="${color}" stroke-dasharray="2.5 3" stroke-linecap="round" stroke-width="1.5" d="M11 21h4c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3h-4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22V2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenMirrorLeft);
