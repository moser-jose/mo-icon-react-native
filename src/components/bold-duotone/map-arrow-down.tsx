import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMapArrowDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8.037 14.143a.5.5 0 0 1-.68-.244L3.164 4.497c-.667-1.495.815-3.047 2.202-2.306l5.904 3.152c.46.245 1 .245 1.459 0l5.904-3.152c1.387-.74 2.869.81 2.202 2.306l-1.572 3.525a2 2 0 0 1-.932.974z"/><path fill="${color}" d="M8.609 15.534a.5.5 0 0 0-.233.651l2.15 4.823c.59 1.323 2.355 1.323 2.946 0l3.968-8.898a.5.5 0 0 0-.68-.651z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMapArrowDown };
export default React.memo(BoldDuotoneMapArrowDown);
