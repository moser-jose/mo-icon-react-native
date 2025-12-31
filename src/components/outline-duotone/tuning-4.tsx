import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTuning4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm2-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-4 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 20h7m0-8h-5m5-8h-3m-4 0H5m5 8H5m0 8h2.667" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneTuning4);
