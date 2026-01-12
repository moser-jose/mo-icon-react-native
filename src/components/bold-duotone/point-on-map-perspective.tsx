import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePointOnMapPerspective: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M22 16c0-2.828 0-4.243-.879-5.121-.49-.49-1.146-.707-2.12-.803-.834-.025-2.8-.076-4-.076H8c-2.046 0-3.351 0-4.25.332l17.936 9.865C22 19.3 22 18.006 22 16" opacity=".5"/><path fill="${color}" d="M10.758 15.899 2.51 11.363C2 12.265 2 13.64 2 16.001c0 2.666 0 4.075.736 4.964zM8 22h8c2.482 0 3.875 0 4.773-.595l-8.514-4.682-8.043 5.08c.871.196 2.067.196 3.784.196M17 2a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePointOnMapPerspective };
export default React.memo(BoldDuotonePointOnMapPerspective);
