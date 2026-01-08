import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneQuitFullScreen: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 22c0-3.771 0-5.657 1.172-6.828S18.229 14 22 14"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 10c3.771 0 5.657 0 6.828-1.172S10 5.771 10 2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 10c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneQuitFullScreen };
export default React.memo(OutlineDuotoneQuitFullScreen);
