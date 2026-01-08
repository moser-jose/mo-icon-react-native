import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWaterdrop: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3.447 16A9 9 0 0 1 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22h-.777A8.47 8.47 0 0 1 6 19.874"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenWaterdrop };
export default React.memo(BrokenWaterdrop);
