import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneVideoFramePlayHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.5 17h-19m19-10h-19M12 17v5m0-20v5m5-4.5V7m0 10v4.5M7 17v4.5m0-19V7" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 12c0-.528-.53-.884-1.589-1.596-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneVideoFramePlayHorizontal);
