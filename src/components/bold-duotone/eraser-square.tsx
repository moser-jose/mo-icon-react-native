import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneEraserSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"/><path fill="${color}" d="m8.988 10.289 4.723 4.723 2.619-2.618c1.113-1.114 1.67-1.67 1.67-2.362s-.557-1.249-1.67-2.362S14.66 6 13.968 6s-1.248.557-2.362 1.67zm3.406 6.041.257-.257-4.724-4.724-.257.257C6.557 12.72 6 13.276 6 13.968s.557 1.249 1.67 2.362S9.34 18 10.032 18s1.248-.557 2.362-1.67"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneEraserSquare };
export default React.memo(BoldDuotoneEraserSquare);
