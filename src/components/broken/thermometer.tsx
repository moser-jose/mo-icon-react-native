import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenThermometer: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.096 10 1.3 1.3m-4.5 1.9 1.3 1.3m-4.51 1.909 1.301 1.3M13.303 5l.82-.82a4.028 4.028 0 1 1 5.697 5.696l-8.942 8.943a3.02 3.02 0 0 1-2.47.866l-.8-.089a2.01 2.01 0 0 0-1.646.578l-.383.384a1.51 1.51 0 1 1-2.137-2.137l.384-.383a2.01 2.01 0 0 0 .578-1.647l-.09-.799a3.02 3.02 0 0 1 .867-2.47L10.303 8"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m9 15 6.5-6.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenThermometer);
