import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneAdhesivePlaster2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m12.765 20.415 7.65-7.65m-9.18-9.181-7.65 7.65" opacity=".5"/><circle cx="9.172" cy="12" r="1" fill="${color}" transform="rotate(-45 9.172 12)"/><circle cx="12" cy="14.828" r="1" fill="${color}" transform="rotate(-45 12 14.828)"/><circle cx="12" cy="9.172" r="1" fill="${color}" transform="rotate(-45 12 9.172)"/><circle cx="14.828" cy="12" r="1" fill="${color}" transform="rotate(-45 14.828 12)"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneAdhesivePlaster2 };
export default React.memo(OutlineDuotoneAdhesivePlaster2);
