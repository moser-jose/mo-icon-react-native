import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTextBold: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M5 4.609A2.61 2.61 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5z"/><path stroke="${color}" stroke-width="1.5" d="M5 12h9a5 5 0 0 1 0 10H7.059A2.06 2.06 0 0 1 5 19.941z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTextBold };
export default React.memo(OutlineDuotoneTextBold);
