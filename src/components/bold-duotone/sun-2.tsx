import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSun2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/><path fill="${color}" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill="${color}" d="M3.669 3.717a.75.75 0 0 1 1.06-.048L6.95 5.701a.75.75 0 1 1-1.012 1.107L3.716 4.776a.75.75 0 0 1-.047-1.06m16.662.001a.75.75 0 0 1-.047 1.06l-2.222 2.03a.75.75 0 0 1-1.012-1.106l2.222-2.032a.75.75 0 0 1 1.06.048m-3.306 13.309a.75.75 0 0 1 1.06 0l2.222 2.222a.75.75 0 1 1-1.06 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06m-10.051 0a.75.75 0 0 1 0 1.06L4.753 20.31a.75.75 0 1 1-1.061-1.061l2.222-2.222a.75.75 0 0 1 1.06 0" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneSun2);
