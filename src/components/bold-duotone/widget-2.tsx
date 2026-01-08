import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWidget2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 6.634a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M12.732 17.366a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5"/><path fill="${color}" d="M13 6.5c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneWidget2 };
export default React.memo(BoldDuotoneWidget2);
