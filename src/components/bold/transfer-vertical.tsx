import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTransferVertical: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M4 13.75a.75.75 0 0 0-.507 1.303l6 5.5A.75.75 0 0 0 10.75 20V4a.75.75 0 0 0-1.5 0v9.75zm16-3.5h-5.25V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 1.257-.553l6 5.5A.75.75 0 0 1 20 10.25"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTransferVertical };
export default React.memo(BoldTransferVertical);
