import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneArrowUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.25 20a.75.75 0 0 0 1.5 0zm1.5 0V4h-1.5v16z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 10-6-6-6 6"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneArrowUp };
export default React.memo(OutlineDuotoneArrowUp);
