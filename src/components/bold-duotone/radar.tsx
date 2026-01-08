import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRadar: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="M11.125 6.823a5.248 5.248 0 1 1-3.636 2.49l4.04 3.27a.75.75 0 1 0 .943-1.166L8.274 8.019c-.562-.454-1.466-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953.75.75 0 1 0 .25 1.478"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRadar };
export default React.memo(BoldDuotoneRadar);
