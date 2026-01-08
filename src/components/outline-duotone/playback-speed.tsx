import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePlaybackSpeed: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/><path stroke="${color}" stroke-dasharray="4 3" stroke-linecap="round" stroke-width="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.977 2 12.5 2" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePlaybackSpeed };
export default React.memo(OutlineDuotonePlaybackSpeed);
