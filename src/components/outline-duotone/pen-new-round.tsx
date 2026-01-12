import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePenNewRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588 8.413 13.9" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="m16.652 3.455.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649-5.964 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122.579-1.735c.18-.542.27-.813.392-1.068q.217-.453.524-.848c.174-.223.376-.425.78-.83z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePenNewRound };
export default React.memo(OutlineDuotonePenNewRound);
