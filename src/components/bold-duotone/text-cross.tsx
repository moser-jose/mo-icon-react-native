import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTextCross: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.066 2c.886 0 1.65 0 2.262.082.655.088 1.284.287 1.793.797.51.51.709 1.138.797 1.793C21 5.284 21 6.048 21 6.934V7.95a1 1 0 1 1-2 0V7c0-.971-.002-1.599-.064-2.061-.059-.434-.153-.57-.229-.646s-.212-.17-.646-.229C17.6 4.002 16.971 4 16 4h-3v16h4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h4V4H8c-.971 0-1.599.002-2.061.064-.434.059-.57.153-.646.229s-.17.212-.229.646C5.002 5.4 5 6.029 5 7v.95a1 1 0 1 1-2 0V6.934c0-.886 0-1.65.082-2.262.088-.655.287-1.284.797-1.793.51-.51 1.138-.709 1.793-.797C6.284 2 7.048 2 7.934 2z" opacity=".5"/><path fill="${color}" d="M4 11a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneTextCross);
