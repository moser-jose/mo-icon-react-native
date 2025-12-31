import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTestTube: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m9.749 2.494 8.41 4.826M9.75 2.494l-7.1 12.252a4.827 4.827 0 0 0 1.776 6.605 4.86 4.86 0 0 0 6.629-1.77l1.495-2.58 1.638-2.827 1.713-2.958 2.257-3.896M9.75 2.494 8.913 2m9.246 5.32.841.484"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m15.902 11.216-2.558-1.472m.845 4.43-4.203-2.419M12.55 17l-2.613-1.503" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M22 14.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneTestTube);
