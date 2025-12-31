import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBalloon: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 18c4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2S4.527 5.404 4.56 9.68C4.595 13.954 7.859 17.964 12 18" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M11.75 5.994a.75.75 0 0 1 .756-.744 3.785 3.785 0 0 1 3.744 3.744.75.75 0 0 1-1.5.012 2.285 2.285 0 0 0-2.256-2.256.75.75 0 0 1-.744-.756" clip-rule="evenodd"/><path fill="${color}" d="M13.18 17.9a6.5 6.5 0 0 1-2.352-.018l-.018.04c-.152.273-.228.41-.261.516-.193.617.204 1.261.858 1.39.111.021.272.021.593.021s.482 0 .593-.021c.654-.129 1.051-.773.858-1.39-.033-.106-.109-.242-.261-.516z"/><path fill="${color}" d="M11.25 19.786q.076.026.157.042c.111.022.272.022.593.022s.482 0 .593-.022q.081-.015.157-.042v1.464a.75.75 0 0 1-1.5 0z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBalloon);
