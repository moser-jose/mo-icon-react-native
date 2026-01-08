import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneHeart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 5.5C7.5.827 2 4.275 2 9.138s4.02 7.455 6.962 9.774C10 19.73 11 20.501 12 20.501"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 5.5C16.5.827 22 4.275 22 9.138s-4.02 7.455-6.962 9.774C14 19.73 13 20.501 12 20.501" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneHeart };
export default React.memo(OutlineDuotoneHeart);
