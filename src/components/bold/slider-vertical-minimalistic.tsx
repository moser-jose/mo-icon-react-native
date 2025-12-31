import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSliderVerticalMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M5.846 8c0-2.828 0-4.243.901-5.121C7.65 2 9.1 2 12 2s4.351 0 5.253.879c.9.878.9 2.293.9 5.121v8c0 2.828 0 4.243-.9 5.121C16.35 22 14.9 22 12 22s-4.351 0-5.253-.879c-.9-.878-.9-2.293-.9-5.121z"/><path fill="${color}" fill-rule="evenodd" d="M2.77 3.75a.76.76 0 0 1 .768.75v15a.76.76 0 0 1-.769.75A.76.76 0 0 1 2 19.5v-15a.76.76 0 0 1 .77-.75m18.46 0a.76.76 0 0 1 .77.75v15a.76.76 0 0 1-.77.75.76.76 0 0 1-.768-.75v-15a.76.76 0 0 1 .769-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldSliderVerticalMinimalistic);
