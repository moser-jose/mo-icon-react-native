import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineKeyMinimalistic2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M15 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5M7.25 9a7.75 7.75 0 1 1 2.824 5.983l-.044.047-2.47 2.47.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.94.94.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.47.47a.75.75 0 0 1-1.06-1.06l1-1 5-5 .047-.044A7.72 7.72 0 0 1 7.25 9M15 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineKeyMinimalistic2);
