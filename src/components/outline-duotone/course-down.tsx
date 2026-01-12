import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCourseDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22 18-7.38-7.335c-.997-.991-1.496-1.487-2.115-1.487s-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12.454V18h-5.582"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCourseDown };
export default React.memo(OutlineDuotoneCourseDown);
