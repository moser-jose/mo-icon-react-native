import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneDangerCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"/><circle cx="12" cy="16" r="1" fill="${color}"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneDangerCircle };
export default React.memo(OutlineDuotoneDangerCircle);
