import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWhisk: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m12.9 15.127-3.02 3.02m-3.02 3.02a2.847 2.847 0 0 1-4.026-4.027l6.039-6.039m11.675-7.65c1.209 1.209-1.45 4.672-3.22 6.442s-6.04 5.234-7.247 4.026M20.548 3.452c2.224 2.223 1.825 6.227-.732 8.784s-7.512 3.906-9.735 1.683M20.548 3.452c-2.223-2.224-6.227-1.825-8.784.732s-3.907 7.512-1.683 9.735M20.548 3.452c-.6-.602-1.76-.245-2.992.483M10.08 13.92c-1.209-1.208 2.255-5.476 4.026-7.246"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenWhisk);
