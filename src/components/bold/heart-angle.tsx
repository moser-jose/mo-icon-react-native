import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldHeartAngle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8.106 18.247C5.298 16.084 2 13.542 2 9.137 2 4.274 7.5.826 12 5.501L14 7.5a.75.75 0 0 0 1.06-1.061l-1.93-1.932c4.239-3.104 8.87.168 8.87 4.63 0 4.405-3.298 6.947-6.106 9.11q-.44.337-.856.664C14 19.73 13 20.501 12 20.501s-2-.771-3.038-1.59q-.417-.328-.856-.664"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldHeartAngle };
export default React.memo(BoldHeartAngle);
