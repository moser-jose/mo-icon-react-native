import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCourseUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7v5.546M22 7h-5.582M22 7l-4.5 4.5m-2.88 2.835c-.997.991-1.496 1.487-2.115 1.487s-1.117-.496-2.115-1.488l-.24-.238c-.997-.992-1.497-1.489-2.116-1.489s-1.118.497-2.115 1.49L2 18"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenCourseUp);
