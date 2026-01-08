import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBag4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.702c2.74 0 4.109 0 5.131.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.852 21h-1.703c-3.932 0-5.898 0-7.064-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"/><circle cx="15" cy="9" r="1" fill="${color}" opacity=".5"/><circle cx="9" cy="9" r="1" fill="${color}" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBag4 };
export default React.memo(OutlineDuotoneBag4);
