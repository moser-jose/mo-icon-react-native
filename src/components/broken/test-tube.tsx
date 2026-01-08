import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTestTube: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m9.749 2.494 8.41 4.826M9.75 2.494 8.913 2m.836.494L6.199 8.62m11.96-1.3-2.257 3.896m2.257-3.896.841.484m-3.098 3.412-1.713 2.958m1.713-2.958-2.558-1.471m.845 4.429L12.55 17m1.638-2.826-4.203-2.418M12.55 17l-1.495 2.581a4.86 4.86 0 0 1-6.629 1.77 4.827 4.827 0 0 1-1.776-6.605l1.3-2.246m8.6 4.5-2.613-1.503"/><path stroke="${color}" stroke-width="1.5" d="M22 14.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTestTube };
export default React.memo(BrokenTestTube);
