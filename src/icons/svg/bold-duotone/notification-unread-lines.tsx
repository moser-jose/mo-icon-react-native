import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneNotificationUnreadLines: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none"><path fill="${color}" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"/><path fill="${color}" d="M7 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0-3.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zM22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneNotificationUnreadLines);
