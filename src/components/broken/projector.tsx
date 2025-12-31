import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenProjector: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 6.017c1.553.047 2.48.22 3.121.862.49.49.707 1.146.803 2.121M10 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121C3.757 18 5.172 18 8 18h2m4 0h2c2.828 0 4.243 0 5.121-.879.769-.768.865-1.946.877-4.121"/><path fill="${color}" d="M18.33 20.335a.75.75 0 1 0 1.34-.67zm-1-2 1 2 1.34-.67-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2-1 2-1.34-.67 1-2z"/><circle cx="14" cy="9" r="5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 9a2 2 0 1 0 2-2"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9.5V11"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenProjector);
