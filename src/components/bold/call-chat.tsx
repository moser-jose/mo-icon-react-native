import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCallChat: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m14.556 15.548-.455.48s-1.083 1.139-4.038-1.972-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"/><path fill="${color}" d="M17 12a5 5 0 1 0-4.478-2.774.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldCallChat);
