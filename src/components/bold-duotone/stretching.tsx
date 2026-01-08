import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneStretching: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path fill="${color}" fill-rule="evenodd" d="M16.559 14.054a2.75 2.75 0 0 1 3.191 2.714V22a.75.75 0 0 1-1.5 0v-5.232c0-.77-.69-1.357-1.45-1.234l-1.013.165a.75.75 0 1 1-.24-1.481z" clip-rule="evenodd"/><path fill="${color}" d="M10.503 9.208a2.25 2.25 0 0 1 3.136 2.068v2.62c0 .47-.12.933-.35 1.343l-2.712 4.848A2.75 2.75 0 0 1 9.1 21.335l-3.849 1.372a.75.75 0 0 1-.504-1.412l3.849-1.373a1.25 1.25 0 0 0 .67-.567l2.713-4.848a1.25 1.25 0 0 0 .16-.61v-2.621a.75.75 0 0 0-1.046-.69L8.638 11.64a.75.75 0 0 0-.228 1.226l.614.6a.75.75 0 1 1-1.047 1.073l-.614-.599a2.25 2.25 0 0 1 .684-3.679z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneStretching };
export default React.memo(BoldDuotoneStretching);
