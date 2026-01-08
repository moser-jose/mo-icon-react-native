import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUploadTrack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0V9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m14.058 11.028-1.316-.658a2.3 2.3 0 0 1-.35-.194 1 1 0 0 1-.374-.607C12 9.476 12 9.374 12 9.17c0-.486 0-.728.06-.893a1 1 0 0 1 1.056-.653c.174.02.391.129.826.346l1.316.658c.183.092.274.137.35.195a1 1 0 0 1 .374.606c.018.093.018.195.018.4 0 .485 0 .728-.06.893a1 1 0 0 1-1.056.652c-.174-.02-.391-.129-.826-.346Z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"/><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneUploadTrack };
export default React.memo(OutlineDuotoneUploadTrack);
