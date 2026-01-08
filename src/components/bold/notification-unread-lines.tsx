import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldNotificationUnreadLines: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill="${color}" fill-rule="evenodd" d="M6.25 14a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.399 0-2.59-.038-3.612a4.5 4.5 0 0 1-6.35-6.35C14.59 2 13.399 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M6.25 17.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldNotificationUnreadLines };
export default React.memo(BoldNotificationUnreadLines);
