import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneEuro: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="M6.75 12q0-.383.053-.75H10a.75.75 0 0 0 0-1.5H7.255a5.25 5.25 0 0 1 7.37-2.298.75.75 0 1 0 .75-1.299 6.753 6.753 0 0 0-9.74 3.597H5a.75.75 0 0 0 0 1.5h.291a6.8 6.8 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.634a6.753 6.753 0 0 0 9.742 3.596.75.75 0 1 0-.751-1.298 5.25 5.25 0 0 1-7.37-2.298H10a.75.75 0 0 0 0-1.5H6.803A5 5 0 0 1 6.75 12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneEuro);
