import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWalkingRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12.5" cy="4.5" r="2.5" stroke="${color}" stroke-width="1.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m7 22 .51-.407A7 7 0 0 0 10 17.5" opacity=".5"/><path fill="${color}" d="m11.158 13.418.747.074zm.813 2.841.594-.458zm3.836 6.2a.75.75 0 1 0 1.187-.917zM10.97 10.015l-.04-.749zm2.117.116-.107.742zm4.11 3.169-.123-.74zm1.926.439a.75.75 0 1 0-.246-1.48zm-3.507-1.391.712-.237zM6.25 14.5a.75.75 0 0 0 1.5 0zm4.504-4.575-.342 3.418 1.492.15.342-3.418zm.624 6.792 4.429 5.741 1.187-.916-4.429-5.741zM11.5 9.25c-.178 0-.371.006-.57.017l.08 1.498q.273-.015.49-.015zm0 1.5c.454 0 .976.051 1.48.124l.214-1.485c-.54-.077-1.14-.139-1.694-.139zm5.82 3.29 1.803-.3-.246-1.48-1.803.3zm-4.34-3.166c.882.127 1.617.79 1.925 1.712l1.423-.474c-.46-1.382-1.613-2.504-3.134-2.723zm-2.05-1.607c-2.766.15-4.68 2.592-4.68 5.233h1.5c0-1.976 1.416-3.635 3.26-3.735zm3.975 3.319a2.17 2.17 0 0 0 2.415 1.454l-.246-1.48a.67.67 0 0 1-.746-.448zm-4.493.757c-.072.723-.14 1.283.013 1.822l1.442-.413c-.056-.198-.047-.42.037-1.26zm2.153 2.458c-.515-.668-.64-.851-.698-1.05l-1.442.414c.154.538.508.977.952 1.552z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneWalkingRound);
