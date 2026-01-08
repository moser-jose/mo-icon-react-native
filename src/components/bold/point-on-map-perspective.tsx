import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPointOnMapPerspective: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M17 2a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2M8 22h8c2.482 0 3.875 0 4.773-.594l-8.514-4.683-8.043 5.08C5.087 22 6.283 22 8 22m2.758-6.102L2.51 11.362C2 12.263 2 13.64 2 16c0 2.666 0 4.075.736 4.964z"/><path fill="${color}" d="M22 16c0-2.828 0-4.243-.879-5.121-.49-.49-1.146-.707-2.121-.803V13a2 2 0 1 1-4 0v-3H8c-2.045 0-3.35 0-4.25.332l17.937 9.865C22 19.3 22 18.006 22 16"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPointOnMapPerspective };
export default React.memo(BoldPointOnMapPerspective);
