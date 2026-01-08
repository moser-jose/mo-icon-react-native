import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRewindBackCircle: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" opacity=".5"/><path fill="${color}" d="M10.564 7.46a.75.75 0 1 1 .871 1.22l-3.221 2.302a1.25 1.25 0 0 0 0 2.034l3.221 2.301a.75.75 0 1 1-.871 1.22l-3.222-2.3a2.75 2.75 0 0 1 0-4.476z"/><path fill="${color}" d="M16.5 15.13V8.869a1 1 0 0 0-1.555-.832l-4.697 3.131a1 1 0 0 0 0 1.664l4.697 3.132a1 1 0 0 0 1.555-.832"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRewindBackCircle };
export default React.memo(BoldDuotoneRewindBackCircle);
