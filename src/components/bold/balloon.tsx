import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBalloon: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M19.5 9.56c.033 4.143-3.419 7.973-7.56 7.94-4.143-.033-7.406-3.918-7.44-8.06A7.355 7.355 0 0 1 11.94 2c4.141.034 7.526 3.419 7.56 7.56m-6.994-4.31a.75.75 0 0 0-.012 1.5 2.285 2.285 0 0 1 2.256 2.256.75.75 0 0 0 1.5-.012 3.785 3.785 0 0 0-3.744-3.744" clip-rule="evenodd"/><path fill="${color}" d="M14.167 18.215c.332 1.062-.356 2.132-1.417 2.347V22a.75.75 0 0 1-1.5 0v-1.438c-1.06-.215-1.75-1.285-1.417-2.347l.007-.021a7.75 7.75 0 0 0 4.32-.002z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldBalloon);
