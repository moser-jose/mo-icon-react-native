import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTextBoldCircle: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M8 7.522C8 6.682 8.681 6 9.522 6H12a3 3 0 1 1 0 6H8zM8 12h5a3 3 0 1 1 0 6H9.176C8.526 18 8 17.473 8 16.823z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTextBoldCircle };
export default React.memo(OutlineDuotoneTextBoldCircle);
