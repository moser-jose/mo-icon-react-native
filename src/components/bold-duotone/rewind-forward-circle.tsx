import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRewindForwardCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="M13.437 7.46a.75.75 0 0 0-.872 1.22l3.221 2.302a1.25 1.25 0 0 1 0 2.034l-3.221 2.301a.75.75 0 0 0 .872 1.22l3.221-2.3a2.75 2.75 0 0 0 0-4.476z"/><path fill="${color}" d="M7.5 15.13V8.869a1 1 0 0 1 1.555-.832l4.697 3.131a1 1 0 0 1 0 1.664l-4.697 3.132A1 1 0 0 1 7.5 15.13"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRewindForwardCircle };
export default React.memo(BoldDuotoneRewindForwardCircle);
