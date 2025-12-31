import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineAlarmTurnOff: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 4.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13m12.402-2.652a.75.75 0 0 1 0 1.061L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 1 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineAlarmTurnOff);
