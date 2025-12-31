import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPrinterMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879.3.3.498.662.628 1.121"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 12v4c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862M6 12v4c0 2.828 0 4.243.879 5.121.641.642 1.568.815 3.121.862"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 11c3.412 0 5.873.713 7.5 1.443m-15 0a15.8 15.8 0 0 1 3.5-1.08"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenPrinterMinimalistic);
