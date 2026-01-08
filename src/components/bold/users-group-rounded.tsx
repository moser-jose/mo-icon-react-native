import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldUsersGroupRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="9.001" cy="6" r="4" fill="${color}"/><ellipse cx="9.001" cy="17.001" fill="${color}" rx="7" ry="4"/><path fill="${color}" d="M21 17c0 1.658-2.036 3-4.521 3 .732-.8 1.236-1.804 1.236-2.998s-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17M18 6.001a3 3 0 0 1-4.029 2.82A5.7 5.7 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.818A3 3 0 0 1 18 6.002"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldUsersGroupRounded };
export default React.memo(BoldUsersGroupRounded);
