import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBuildings2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M20.913 5.89c.337.504.337 1.206.337 2.61v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h.5V8.5c0-1.404 0-2.106.337-2.61a2 2 0 0 1 .552-.553c.441-.294 2.537-.331 3.618-.336q-.005.438-.004.91v1.34H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v6.5h10v-6.5h2.497a.75.75 0 0 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497V5.91q.001-.472-.004-.91c1.081.005 3.17.042 3.612.336a2 2 0 0 1 .552.552" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M10.75 2h2c1.886 0 2.828 0 3.414.586S16.75 4.114 16.75 6v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.886 0-2.828.586-3.414S8.864 2 10.75 2m1 16.25a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75m-2-4.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m.75-3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneBuildings2 };
export default React.memo(BoldDuotoneBuildings2);
