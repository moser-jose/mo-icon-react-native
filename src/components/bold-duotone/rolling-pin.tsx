import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRollingPin: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m13.157 17.012 3.856-3.856c1.454-1.454 2.18-2.18 2.18-3.084 0-.605-.326-1.132-.978-1.85-.322-.354-.723-.755-1.202-1.235-.48-.48-.881-.88-1.235-1.202-.719-.652-1.245-.979-1.85-.979-.904 0-1.63.727-3.085 2.181l-3.855 3.856c-1.455 1.454-2.182 2.181-2.182 3.085 0 .605.327 1.131.98 1.85.321.354.722.754 1.202 1.234s.88.88 1.234 1.202c.719.653 1.245.98 1.85.98.904 0 1.63-.728 3.085-2.182"/><path fill="${color}" d="M21.254 2.746c-.098-.098-.147-.147-.188-.184a2.18 2.18 0 0 0-3.17.262 6 6 0 0 0-.155.213l-1.963 2.748c.354.322.755.723 1.234 1.202.48.48.881.881 1.203 1.235l2.748-1.963c.113-.08.169-.12.213-.156a2.18 2.18 0 0 0 .262-3.169 6 6 0 0 0-.184-.188M2.562 21.066c.037.041.086.09.184.188s.147.147.188.184a2.18 2.18 0 0 0 3.17-.262c.034-.044.074-.1.155-.213l1.963-2.748a38 38 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234l-2.748 1.963a6 6 0 0 0-.213.155 2.18 2.18 0 0 0-.262 3.17" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRollingPin };
export default React.memo(BoldDuotoneRollingPin);
