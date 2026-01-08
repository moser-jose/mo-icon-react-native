import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneStreets: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M21.012 4.049 13.061 12l7.951 7.951C22 18.456 22 16.134 22 12s0-6.455-.988-7.951M12 13.061l-7.952 7.952C5.545 22 7.866 22 12 22s6.455 0 7.952-.987z"/><path fill="${color}" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.134 0 6.455.988 7.952L19.952 2.988C18.455 2 16.134 2 12 2 7.286 2 4.929 2 3.464 3.464" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneStreets };
export default React.memo(BoldDuotoneStreets);
