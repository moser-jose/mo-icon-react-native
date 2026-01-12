import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenStarFallMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.322 14.492c-.942 1.493-1.413 2.24-1.092 2.85s1.22.681 3.021.822l.466.036c.512.04.768.06.991.178.224.117.39.319.723.723l.302.367c1.17 1.42 1.754 2.13 2.421 2.04.667-.092.975-.924 1.59-2.59l.16-.43c.174-.473.261-.71.433-.881s.408-.26.881-.434l.43-.16c1.666-.614 2.498-.922 2.59-1.589.09-.667-.62-1.251-2.04-2.42m-1.304-2.483c-.14-1.8-.211-2.7-.822-3.021-.61-.321-1.357.15-2.85 1.092l-.386.243c-.424.268-.636.402-.88.435-.245.034-.494-.037-.992-.178l-.453-.129c-1.751-.498-2.627-.747-3.096-.278s-.22 1.345.278 3.096M13.5 6.5 13 6M9.5 2.5l2 2m-5 2L4 4m2 8-1.5-1.5M2 8l.5.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenStarFallMinimalistic };
export default React.memo(BrokenStarFallMinimalistic);
