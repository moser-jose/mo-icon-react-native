import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenLogin2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.001 11.999h14m0 0-3.5-3m3.5 3-3.5 3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121.641.642 1.568.815 3.121.862"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenLogin2 };
export default React.memo(BrokenLogin2);
