import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRepeat: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28-2-2-1.06 1.06 2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12z"/><path fill="${color}" d="M13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28 2 2 1.06-1.06-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneRepeat);
