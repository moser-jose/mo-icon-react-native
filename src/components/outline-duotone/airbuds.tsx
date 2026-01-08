import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneAirbuds: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M13.5 18v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V8.313c0-.29 0-.436.006-.558a5 5 0 0 1 4.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004a3 3 0 0 1 2.85 2.849c.003.073.003.16.003.335V8.3a3 3 0 0 1-3 3 1 1 0 0 0-1 1V18m-4.5 0H18m-7.5 0v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0V8.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 3 5.478 3 5.187 3c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 5.926 2 6.013 2 6.188V8.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V18m4.5 0H6"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19.5 6v2.5M4.5 6v2.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneAirbuds };
export default React.memo(OutlineDuotoneAirbuds);
