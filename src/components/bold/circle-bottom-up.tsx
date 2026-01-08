import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCircleBottomUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.47 21.53a.75.75 0 0 1 0-1.06l7.72-7.72H6.655a.75.75 0 0 1 0-1.5H12a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V13.81l-7.72 7.72a.75.75 0 0 1-1.06 0" clip-rule="evenodd"/><path fill="${color}" d="m3.518 17.3 3.052-3.052a2.25 2.25 0 0 1 .086-4.498H12A2.25 2.25 0 0 1 14.25 12v5.344a2.25 2.25 0 0 1-4.498.086L6.7 20.482A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.947.556 3.763 1.518 5.3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldCircleBottomUp };
export default React.memo(BoldCircleBottomUp);
