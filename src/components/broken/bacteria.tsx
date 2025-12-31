import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBacteria: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m4.5 11.5.414-1m9.551-3.328s1.243-.172 2.121.707c.879.878.707 2.121.707 2.121M9 9.293s-1.243.172-2.121-.707C6 7.708 6.17 6.465 6.17 6.465M19 13.137s-1.162.473-1.483 1.673.448 2.19.448 2.19m-4.545.772L15 19m-.5-5v-2M12 5h-2m2.5 4.5-1-1"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBacteria);
