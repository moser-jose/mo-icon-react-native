import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUfo: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m5.5 15.5-1 2m14-2 1 2"/><path stroke="${color}" stroke-width="1.5" d="M17 8.21c2.989.723 5 2.071 5 3.616C22 14.131 17.523 16 12 16S2 14.13 2 11.826c0-1.545 2.011-2.893 5-3.615"/><path stroke="${color}" stroke-width="1.5" d="M7 8.729A4.73 4.73 0 0 1 11.729 4h.542A4.73 4.73 0 0 1 17 8.729c0 .177-.054.35-.2.451-.414.288-1.61.82-4.8.82s-4.386-.532-4.8-.82c-.146-.1-.2-.274-.2-.451Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 16v3"/><circle cx="12" cy="13" r="1" fill="${color}"/><circle cx="7" cy="12" r="1" fill="${color}"/><circle cx="17" cy="12" r="1" fill="${color}"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneUfo };
export default React.memo(OutlineDuotoneUfo);
