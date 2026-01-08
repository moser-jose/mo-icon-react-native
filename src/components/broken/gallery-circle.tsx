import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenGalleryCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="15" cy="9" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m20 17.6-2.224-2a3 3 0 0 0-3.732-.225l-.298.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104L2.28 12.253"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenGalleryCircle };
export default React.memo(BrokenGalleryCircle);
