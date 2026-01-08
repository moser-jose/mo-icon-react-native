import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneLinkRound: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneLinkRound };
export default React.memo(OutlineDuotoneLinkRound);
