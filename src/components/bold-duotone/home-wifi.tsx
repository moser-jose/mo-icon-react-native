import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHomeWifi: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22" opacity=".5"/><path fill="${color}" d="M17.45 12.192c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02"/><path fill="${color}" d="M15.45 14.35c-1.912-2.063-4.987-2.063-6.9 0a.75.75 0 1 1-1.1-1.019c2.506-2.704 6.594-2.704 9.1 0a.75.75 0 0 1-1.1 1.02"/><path fill="${color}" d="M13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.512 3.699-1.512 5.1 0a.75.75 0 0 1-1.1 1.02"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneHomeWifi };
export default React.memo(BoldDuotoneHomeWifi);
