import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFlag: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="m13.349 3.79-.204-.082a8.7 8.7 0 0 0-4.924-.452L6.5 3.601v10l1.72-.345a8.7 8.7 0 0 1 4.925.453 8.68 8.68 0 0 0 5.327.361l.214-.054a1.404 1.404 0 0 0 1.064-1.362V5.287a1.2 1.2 0 0 0-1.49-1.164 8 8 0 0 1-4.911-.333"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneFlag };
export default React.memo(BoldDuotoneFlag);
