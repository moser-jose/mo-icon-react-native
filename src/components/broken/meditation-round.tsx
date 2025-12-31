import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMeditationRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 17-1.158-.389a2.7 2.7 0 0 1-.642-.317l-.101-.069A2.5 2.5 0 0 1 18 14.151q-.001-.546-.112-1.06M3 17l1.158-.39q.342-.115.642-.317l.101-.069A2.5 2.5 0 0 0 6 14.151c0-2.437 1.744-4.517 4.123-4.918l.89-.15c.487-.082 1.487-.082 1.973 0l.891.15a5 5 0 0 1 1.123.33M9.5 16l-.925 1.233c-.147.196-.22.295-.304.381a2 2 0 0 1-.732.486c-.112.043-.23.073-.47.133l-1.793.448A1.685 1.685 0 0 0 5.685 22h.683c1.709 0 3.37-.554 4.737-1.579L13 19m1.5-3 .727.969c.343.458.515.687.738.856q.1.076.21.14c.242.14.52.209 1.075.348l1.474.368A1.685 1.685 0 0 1 18.315 22h-.937c-.563 0-.844 0-1.123-.016a10 10 0 0 1-2.425-.44c-.267-.083-.53-.181-1.056-.379L11 20.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenMeditationRound);
