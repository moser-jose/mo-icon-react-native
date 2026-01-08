import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenInboxOut: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10V2m0 0 3 3m-3-3L9 5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127m10 0c1.625.16 2.72.521 3.535 1.338.974.973 1.3 2.342 1.41 4.535"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenInboxOut };
export default React.memo(BrokenInboxOut);
