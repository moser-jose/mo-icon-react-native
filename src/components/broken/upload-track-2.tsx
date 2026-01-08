import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUploadTrack2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 15V7"/><circle cx="11" cy="15" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 10a3 3 0 0 1-3-3"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12c0-1.821.487-3.53 1.338-5M21.8 14q.198-.97.2-2c0-5.523-4.477-10-10-10-1.821 0-3.53.487-5 1.338"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenUploadTrack2 };
export default React.memo(BrokenUploadTrack2);
