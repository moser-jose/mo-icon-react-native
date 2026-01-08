import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBanknote2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 10c0-2.828 0-4.243.879-5.121C3.757 4 5.172 4 8 4h5c2.828 0 4.243 0 5.121.879C19 5.757 19 7.172 19 10s0 4.243-.879 5.121C17.243 16 15.828 16 13 16H8c-2.828 0-4.243 0-5.121-.879C2 14.243 2 12.828 2 10Z"/><path stroke="${color}" stroke-width="1.5" d="M19 7.076c.975.096 1.632.313 2.122.803C22 8.757 22 10.172 22 13s0 4.243-.878 5.121c-.88.88-2.293.88-5.122.88h-5c-2.828 0-4.242 0-5.121-.88-.49-.49-.707-1.146-.803-2.121" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M13 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 12V8M5 12V8" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBanknote2 };
export default React.memo(OutlineDuotoneBanknote2);
