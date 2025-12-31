import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRestartCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="${color}" opacity=".5"/><path fill="${color}" d="M16.402 6.285a.75.75 0 0 0-1.287-.524l-.75.768a5.67 5.67 0 0 0-6.437 1.208c-2.237 2.29-2.237 5.996 0 8.287a5.67 5.67 0 0 0 8.144 0 5.93 5.93 0 0 0 1.634-4.874.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.643a4.17 4.17 0 0 1-5.998 0c-1.668-1.707-1.668-4.482 0-6.19a4.17 4.17 0 0 1 4.224-1.089l-.761.78A.75.75 0 0 0 13 9.75h2.652a.75.75 0 0 0 .75-.75z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneRestartCircle);
