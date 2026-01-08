import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCardholder: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 11v-1c0-1.886 0-2.829-.586-3.415-.471-.471-1.174-.563-2.414-.581M7 11v-1c0-1.886 0-2.829.586-3.415.471-.471 1.174-.563 2.414-.581M5 11h14M8 16h1m7 0h-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenCardholder };
export default React.memo(BrokenCardholder);
