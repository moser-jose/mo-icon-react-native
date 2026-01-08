import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSunset: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8M5 19h14M2 16h20M12 6v6m0 0 2-2m-2 2-2-2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v1m10 9h-1M3 12H2m17.07-7.07-.392.393M5.322 5.322l-.393-.393M10 6.341a6 6 0 0 1 6.5 9.627h-9A5.98 5.98 0 0 1 6 12c0-.701.12-1.374.341-2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenSunset };
export default React.memo(BrokenSunset);
