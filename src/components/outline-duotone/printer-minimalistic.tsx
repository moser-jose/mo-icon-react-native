import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePrinterMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 12v4c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-4"/><path stroke="${color}" stroke-width="1.5" d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19.5 12.443C17.873 11.713 15.412 11 12 11s-5.873.713-7.5 1.443"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePrinterMinimalistic };
export default React.memo(OutlineDuotonePrinterMinimalistic);
