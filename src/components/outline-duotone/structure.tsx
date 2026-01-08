import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneStructure: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 19h8M8 5h8m3 11V8M5 16V8" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneStructure };
export default React.memo(OutlineDuotoneStructure);
