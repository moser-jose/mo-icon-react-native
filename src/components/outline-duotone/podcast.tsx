import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePodcast: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 10h2m-2 3h2m-6-3h1m-1 3h1" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 1 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 16v3" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePodcast };
export default React.memo(OutlineDuotonePodcast);
