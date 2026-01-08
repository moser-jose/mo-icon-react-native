import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHashtagCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M11.718 7.216a.75.75 0 1 0-1.436-.431l-.74 2.465H7a.75.75 0 1 0 0 1.5h2.092l-.75 2.5H6a.75.75 0 0 0 0 1.5h1.892l-.61 2.035a.75.75 0 0 0 1.436.43l.74-2.465h3.434l-.61 2.035a.75.75 0 0 0 1.436.43l.74-2.465H17a.75.75 0 0 0 0-1.5h-2.092l.75-2.5H18a.75.75 0 0 0 0-1.5h-1.892l.61-2.034a.75.75 0 1 0-1.436-.431l-.74 2.465h-3.434zm2.374 3.534-.75 2.5H9.908l.75-2.5z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneHashtagCircle };
export default React.memo(BoldDuotoneHashtagCircle);
