import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneVideoFrameCut: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 3.004c2.794.02 4.324.163 5.328 1.168C21 5.344 21 7.23 21 11.001v2c0 3.77 0 5.656-1.172 6.828-1.004 1.005-2.534 1.148-5.328 1.168m-5 0c-2.794-.02-4.324-.163-5.328-1.168C3 18.657 3 16.772 3 13v-2c0-3.772 0-5.657 1.172-6.829C5.176 3.167 6.706 3.024 9.5 3.004"/><path stroke="${color}" stroke-dasharray="3 3" stroke-linecap="round" stroke-width="1.5" d="M12 2v20"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 4v16M7 4v16M3.5 8.5H7m10 0h3.5m-3.5 7h3.5m-17 0H7" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneVideoFrameCut };
export default React.memo(OutlineDuotoneVideoFrameCut);
