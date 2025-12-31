import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneVolumeKnob: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill="${color}" d="M20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" opacity=".5"/><path fill="${color}" d="M6.697 5.282a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414" opacity=".7"/><path fill="${color}" d="M18.718 17.304a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414" opacity=".4"/><path fill="${color}" d="M18.718 6.696a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414" opacity=".7"/><path fill="${color}" d="M6.697 18.718a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414" opacity=".4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneVolumeKnob);
