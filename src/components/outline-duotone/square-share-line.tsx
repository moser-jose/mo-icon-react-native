import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSquareShareLine: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 13.998c-.029 3.414-.218 5.296-1.46 6.537C19.076 22 16.718 22 12.003 22s-7.073 0-8.538-1.465S2 16.713 2 11.997C2 7.282 2 4.924 3.465 3.46 4.706 2.218 6.588 2.029 10.002 2" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7h-8c-1.818 0-2.913.892-3.32 1.3q-.187.19-.19.19 0 .003-.19.19C9.892 9.087 9 10.182 9 12v3m13-8-5-5m5 5-5 5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSquareShareLine };
export default React.memo(OutlineDuotoneSquareShareLine);
