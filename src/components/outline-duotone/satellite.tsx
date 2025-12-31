import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSatellite: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M20.47 10.917s-1.847-.615-4.31-3.078-3.078-4.31-3.078-4.31"/><path fill="${color}" d="M16.69 8.37a.75.75 0 0 0-1.06-1.061zm-15.054.66a.75.75 0 1 0 .728 1.312zm12.022 12.605a.75.75 0 0 0 1.31.728zM4.47 18.469a.75.75 0 1 0 1.06 1.06zm8.248-15.595L1.636 9.03l.728 1.312 11.082-6.157zm7.096 7.679-6.156 11.082 1.31.728 6.157-11.082zM15.63 7.309 4.47 18.469l1.06 1.06L16.69 8.37z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.082 10.918A5.224 5.224 0 1 0 20.47 3.53a5.224 5.224 0 0 0-7.388 7.388Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneSatellite);
