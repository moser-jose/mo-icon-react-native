import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneScissorsSquare: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.5 17.1 8 6m10 10.2c0 .994-.84 1.8-1.875 1.8s-1.875-.806-1.875-1.8.84-1.8 1.875-1.8S18 15.206 18 16.2Zm-8.5.9L16 6M6 16.2c0 .994.84 1.8 1.875 1.8s1.875-.806 1.875-1.8-.84-1.8-1.875-1.8S6 15.206 6 16.2Z"/><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneScissorsSquare };
export default React.memo(OutlineDuotoneScissorsSquare);
