import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSnowflake: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v16m0 4v-4m0 0 3 3m-3-3-3 3m6-18-3 3-3-3M3.34 7l3.464 2m0 0 10.392 6M6.804 9 5.706 4.902M6.804 9l-4.098 1.098M17.196 15l3.464 2m-3.464-2 4.098-1.098M17.196 15l1.098 4.099M20.66 7l-3.464 2m0 0L6.804 15m10.392-6 1.098-4.098M17.196 9l4.098 1.098M6.804 15 3.34 17m3.464-2-4.098-1.098M6.804 15l-1.098 4.1"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenSnowflake);
