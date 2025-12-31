import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldMentionCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 10.35a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3"/><path fill="${color}" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M6.75 12a5.25 5.25 0 1 1 10.185 1.797.8.8 0 0 1-.217.304l-.08.075a.887.887 0 0 1-1.488-.652V12a3.15 3.15 0 1 0-1.277 2.533 2.386 2.386 0 0 0 3.782.745l.08-.074c.25-.23.476-.528.609-.893A6.75 6.75 0 1 0 12 18.75a.75.75 0 0 0 0-1.501A5.25 5.25 0 0 1 6.75 12" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldMentionCircle);
