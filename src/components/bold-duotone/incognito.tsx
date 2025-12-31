import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneIncognito: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M21 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/><path fill="${color}" fill-rule="evenodd" d="M1.25 10A.75.75 0 0 1 2 9.25h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" d="m4.188 9.25.426-1.705c.545-2.183.818-3.274 1.632-3.91C7.06 3 8.185 3 10.435 3h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91l.427 1.705z" opacity=".5"/><path fill="${color}" d="M10 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/><path fill="${color}" d="M9.884 17.396a3.5 3.5 0 0 0 .026-1.69l.413-.207a3.75 3.75 0 0 1 3.354 0l.413.207a3.5 3.5 0 0 0 .026 1.69l-1.11-.555a2.25 2.25 0 0 0-2.012 0z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneIncognito);
