import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineChatRoundUnread: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 9.065-11.1.75.75 0 1 1 1.47-.3q.213 1.046.215 2.15c0 5.937-4.813 10.75-10.75 10.75-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25q1.104.002 2.15.215a.75.75 0 0 1-.3 1.47A9.3 9.3 0 0 0 12 2.75M15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M19 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineChatRoundUnread };
export default React.memo(OutlineChatRoundUnread);
