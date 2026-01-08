import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenReel2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22h10"/><path stroke="${color}" stroke-width="1.5" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/><path fill="${color}" d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenReel2 };
export default React.memo(BrokenReel2);
