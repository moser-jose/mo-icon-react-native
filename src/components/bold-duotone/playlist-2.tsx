import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePlaylist2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m0 4A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M19.345 5.993c.278-.102.61-.19.97-.125.442.081.836.33 1.1.693.215.295.28.633.308.929.027.288.027.646.027 1.055v.11c0 .3.002.62-.106.916a1.75 1.75 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033-1.785.857c-.369.176-.692.332-.964.432-.261.096-.57.18-.905.135v4.286c0 1.814-1.435 3.322-3.25 3.322s-3.25-1.508-3.25-3.322 1.435-3.321 3.25-3.321a3.2 3.2 0 0 1 1.75.521v-3.628h.003q-.004-.255-.003-.545v-.11c0-.3-.002-.62.106-.916a1.8 1.8 0 0 1 .392-.623c.22-.225.509-.363.78-.492l.068-.032 1.785-.857c.369-.177.692-.333.964-.433"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotonePlaylist2);
