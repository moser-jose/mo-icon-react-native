import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSoundwave: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 4v16"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 7v10M8 7v10" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 11v2M4 11v2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSoundwave };
export default React.memo(OutlineDuotoneSoundwave);
