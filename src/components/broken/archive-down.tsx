import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenArchiveDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293S2 4.057 2 5s0 1.414.293 1.707S3.057 7 4 7h16c.943 0 1.414 0 1.707-.293S22 5.943 22 5s0-1.414-.293-1.707S20.943 3 20 3h-4"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v9m0 0 3-3.333M12 16l-3-3.333"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenArchiveDown };
export default React.memo(BrokenArchiveDown);
