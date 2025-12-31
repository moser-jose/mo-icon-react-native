import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSleepingCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M13.285 3.262a2.253 2.253 0 0 0-2.483 2.096 2.25 2.25 0 0 0-.724 2.96c.194.352.482.653.845.863l1.732 1a2.25 2.25 0 0 0 3.357-1.662 2.25 2.25 0 0 0 3.113.894l.976-.563A10 10 0 0 1 21 13c0 5.523-4.477 10-10 10S1 18.523 1 13 5.477 3 11 3q1.18.002 2.285.262m-7.839 7.99a.75.75 0 0 1 .612.246c.464.518.964.752 1.442.752.297 0 .604-.09.904-.284q.275-.175.538-.468a.75.75 0 1 1 1.116 1.004c-.67.743-1.548 1.248-2.558 1.248s-1.889-.505-2.558-1.248a.75.75 0 0 1 .504-1.25m7.612.246a.75.75 0 1 0-1.116 1.004c.67.743 1.548 1.248 2.558 1.248s1.889-.505 2.558-1.248a.75.75 0 0 0-1.116-1.004c-.465.518-.965.752-1.442.752s-.977-.234-1.442-.752M12 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldSleepingCircle);
