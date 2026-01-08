import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWeigher: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 18h8m.412-8.03.665-1.663A2 2 0 0 0 15.55 5.59l-.425-.07a19 19 0 0 0-6.248 0l-.425.07a2 2 0 0 0-1.528 2.716l.665 1.664c.236.59.871.914 1.487.76 1.92-.48 3.93-.48 5.85 0a1.27 1.27 0 0 0 1.486-.76Zm-6.232-.04-.675-1.883"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneWeigher };
export default React.memo(OutlineDuotoneWeigher);
