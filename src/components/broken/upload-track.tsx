import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUploadTrack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0V9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m14.058 11.028-1.316-.658a2.3 2.3 0 0 1-.35-.194 1 1 0 0 1-.374-.607C12 9.476 12 9.374 12 9.17c0-.486 0-.728.06-.893a1 1 0 0 1 1.056-.653c.174.02.391.129.826.346l1.316.658c.183.092.274.137.35.195a1 1 0 0 1 .374.606c.018.093.018.195.018.4 0 .485 0 .728-.06.893a1 1 0 0 1-1.056.652c-.174-.02-.391-.129-.826-.346Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12c0-1.821.487-3.53 1.338-5M21.8 14q.198-.97.2-2c0-5.523-4.477-10-10-10-1.821 0-3.53.487-5 1.338"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenUploadTrack };
export default React.memo(BrokenUploadTrack);
