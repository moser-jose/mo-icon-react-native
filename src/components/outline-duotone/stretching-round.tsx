import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneStretchingRound: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="14.5" cy="4.5" r="2.5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m7.948 13.434-.025-.024c-1.042-1.007-.237-2.626.67-3.268.907-.643 4.752-1.643 4.752 3.292 0 4.694-3.65 8.565-8.345 8.565" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 21.997V18.05c0-1.776-1.605-3.129-3.373-2.844"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneStretchingRound };
export default React.memo(OutlineDuotoneStretchingRound);
