import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldAlarmPlay: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m1.026-11.725a15 15 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617-.48.36-.524 1.117-.612 2.628-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.131 2.268.612 2.629.481.36 1.018.034 2.09-.618.278-.169.547-.341.784-.508.27-.19.565-.418.862-.66C14.963 14.188 15.5 13.75 15.5 13s-.537-1.188-1.612-2.065a15 15 0 0 0-.862-.66m-4.89-8.672a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 0 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldAlarmPlay);
