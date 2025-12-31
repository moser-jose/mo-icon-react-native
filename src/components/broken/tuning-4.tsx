import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTuning4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm2-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-4 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17.5 20H19m-7 0h2.75M6.5 4H5m7 0H9.25M19 12h-5m5-8h-3M5 20h2.667M10 12H7.5m-2 0H5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenTuning4);
