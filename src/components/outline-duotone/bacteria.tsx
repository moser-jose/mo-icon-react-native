import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBacteria: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m4.5 11.5.414-1" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.465 7.172s1.243-.172 2.121.707c.879.878.707 2.121.707 2.121M9 9.293s-1.243.172-2.121-.707C6 7.708 6.17 6.465 6.17 6.465M19 13.137s-1.162.473-1.483 1.673.448 2.19.448 2.19m-4.545.772L15 19"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.5 14v-2M12 5h-2" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m12.5 9.5-1-1"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBacteria };
export default React.memo(OutlineDuotoneBacteria);
