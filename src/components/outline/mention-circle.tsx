import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineMentionCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M6.75 12a5.25 5.25 0 1 1 10.185 1.797.8.8 0 0 1-.217.304l-.08.075a.887.887 0 0 1-1.488-.652V12a3.15 3.15 0 1 0-1.277 2.533 2.386 2.386 0 0 0 3.782.745l.08-.074c.25-.23.476-.528.609-.893A6.75 6.75 0 1 0 12 18.75a.75.75 0 0 0 0-1.501A5.25 5.25 0 0 1 6.75 12M12 10.35a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineMentionCircle };
export default React.memo(OutlineMentionCircle);
