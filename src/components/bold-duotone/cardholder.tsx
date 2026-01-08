import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCardholder: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"/><path fill="${color}" d="M8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"/><path fill="${color}" fill-rule="evenodd" d="M17 10.25H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="${color}" d="M13 6h-2c-1.886 0-2.828 0-3.414.586S7 8.114 7 10v.25h10V10c0-1.886 0-2.828-.586-3.414S14.886 6 13 6" opacity=".7"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneCardholder };
export default React.memo(BoldDuotoneCardholder);
