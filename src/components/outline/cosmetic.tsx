import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineCosmetic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M7.75 5.618a1.75 1.75 0 0 0-2.533-1.565l-2 1a1.75 1.75 0 0 0-.967 1.565v3.632H2a.75.75 0 0 0-.75.75v6a3.75 3.75 0 1 0 7.5 0v-6a.75.75 0 0 0-.75-.75h-.25zm-5 6.132h4.5V17a2.25 2.25 0 1 1-4.5 0zm3.5-1.5V5.618a.25.25 0 0 0-.362-.223l-2 1a.25.25 0 0 0-.138.223v3.632zm10.25-6a6.25 6.25 0 0 0-.75 12.456v2.544H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-2.544A6.251 6.251 0 0 0 16.5 4.25m0 11a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineCosmetic);
