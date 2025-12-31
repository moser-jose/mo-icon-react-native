import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldAirbudsRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.735 4.95a.75.75 0 0 1-.586.885 4.26 4.26 0 0 0-3.314 3.314.75.75 0 0 1-1.47-.298 5.76 5.76 0 0 1 4.486-4.486.75.75 0 0 1 .884.586M7.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-2.25-8a.75.75 0 0 1 .75-.75h1.5c1.109 0 2.25.773 2.25 2 0 .786-.468 1.386-1.096 1.715l.99 1.65a.75.75 0 0 1-1.287.77L7.075 17.25H6.75V19a.75.75 0 0 1-1.5 0zm1.5 1.75v-1h.75c.548 0 .75.346.75.5s-.202.5-.75.5z" clip-rule="evenodd"/><path fill="${color}" d="M19.618 22C20.933 22 22 20.88 22 19.5h-4.765c0 1.38 1.067 2.5 2.383 2.5"/><path fill="${color}" fill-rule="evenodd" d="M13 7.889V5.542c0-.194 0-.29.004-.372.08-1.713 1.385-3.082 3.017-3.166.078-.004.17-.004.354-.004.307 0 .46 0 .59.007 2.72.14 4.895 2.422 5.029 5.276.006.136.006.297.006.62v9.93h-4.765v-5.5c0-.613-.474-1.11-1.058-1.11C14.422 11.222 13 9.73 13 7.888m1.677-2.764c0-.46.335-.833.75-.833.414 0 .75.373.75.833v2.778c0 .46-.336.833-.75.833-.415 0-.75-.373-.75-.833z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldAirbudsRight);
