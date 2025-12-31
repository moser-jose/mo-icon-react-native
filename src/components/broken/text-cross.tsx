import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTextCross: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586S20 5.114 20 7v.95M12 3v6m0 12v-1.5m0-4.5v2m-5 4h10"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4 12h16"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenTextCross);
