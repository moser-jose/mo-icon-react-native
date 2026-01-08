import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineVinyl: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.746 1.975a.75.75 0 0 1-.672.82 9.251 9.251 0 1 0 10.13 10.13.75.75 0 1 1 1.493.149c-.54 5.433-5.122 9.676-10.697 9.676-5.937 0-10.75-4.813-10.75-10.75 0-5.575 4.243-10.158 9.676-10.697a.75.75 0 0 1 .82.672m2.81-.123a.75.75 0 0 1 .669-.11 10.77 10.77 0 0 1 7.033 7.032.75.75 0 1 1-1.431.45 9.28 9.28 0 0 0-5.077-5.683v8.458a3.75 3.75 0 1 1-1.5-3V2.457a.75.75 0 0 1 .306-.605M14.25 12a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineVinyl };
export default React.memo(OutlineVinyl);
