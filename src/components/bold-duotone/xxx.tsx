import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneXxx: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M4.084 8.376a.75.75 0 0 1 1.04.208L6.5 10.648l1.376-2.064a.75.75 0 0 1 1.374.406.75.75 0 0 1 1.374-.406L12 10.648l1.376-2.064a.75.75 0 0 1 1.374.406.749.749 0 0 1 1.374-.406l1.376 2.064 1.376-2.064a.75.75 0 0 1 1.248.832L18.401 12l1.723 2.584a.75.75 0 1 1-1.248.832L17.5 13.352l-1.376 2.064a.75.75 0 0 1-1.374-.406.75.75 0 0 1-1.374.406L12 13.352l-1.376 2.064a.75.75 0 0 1-1.374-.406.75.75 0 0 1-1.374.406L6.5 13.352l-1.376 2.064a.75.75 0 1 1-1.248-.832L5.599 12 3.876 9.416a.75.75 0 0 1 .208-1.04m10.54 1.04L12.901 12l1.723 2.584a.75.75 0 0 1 .126.405.75.75 0 0 1 .126-.405L16.599 12l-1.723-2.584a.75.75 0 0 1-.126-.404.75.75 0 0 1-.126.404M7.401 12l1.723-2.584a.75.75 0 0 0 .126-.404c.002.139.043.28.126.404L11.099 12l-1.723 2.584a.75.75 0 0 0-.126.405.75.75 0 0 0-.126-.405z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneXxx };
export default React.memo(BoldDuotoneXxx);
