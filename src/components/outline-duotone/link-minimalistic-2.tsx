import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneLinkMinimalistic2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m14.163 18.488-.721.72a6.117 6.117 0 1 1-8.65-8.65l.72-.72" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m9.837 14.163 4.326-4.325"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m9.837 5.512.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneLinkMinimalistic2 };
export default React.memo(OutlineDuotoneLinkMinimalistic2);
