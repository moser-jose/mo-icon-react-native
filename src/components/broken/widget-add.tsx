import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenWidgetAdd: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3m-14.95 12c.065-.65.21-1.088.536-1.414.586-.586 1.528-.586 3.414-.586s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586c-.31-.31-.456-.718-.524-1.313"/><path stroke="${color}" stroke-width="1.5" d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586S2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586 2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586-.586-1.528-.586-3.414Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenWidgetAdd);
