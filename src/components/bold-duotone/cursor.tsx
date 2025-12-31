import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCursor: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m11.433 16.464 1.203-1.202 2.626-2.626 1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508s-.963-.963-2.596-1.565l-5.45-2.007C6.861 4.152 5.232 3.55 4.392 4.39s-.24 2.47.962 5.73l2.006 5.45c.602 1.633.903 2.45 1.565 2.596s1.277-.47 2.508-1.702" clip-rule="evenodd"/><path fill="${color}" d="m12.636 15.262 3.938 3.939c.408.407.612.611.84.705.302.126.643.126.946 0 .228-.094.432-.298.84-.705.407-.408.611-.612.706-.84a1.24 1.24 0 0 0 0-.947c-.095-.227-.299-.431-.706-.839l-3.939-3.938z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCursor);
