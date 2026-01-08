import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRoundGraph: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2c5.523 0 10 4.477 10 10 0 1.821-.487 3.53-1.338 5M5 4.859A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10 1.821 0 3.53-.487 5-1.338"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5 12c0 1.487.464 2.866 1.255 4M12 5a7 7 0 1 1-3 13.326"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 16a4 4 0 0 0 0-8"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenRoundGraph };
export default React.memo(BrokenRoundGraph);
