import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBillFull: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M19.875 20.592a1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0c-.436.37-1.125.074-1.125-.483V3.891c0-.557.69-.853 1.125-.483a1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0c.436-.37 1.125-.074 1.125.483v16.218c0 .557-.69.853-1.125.483M6.75 12a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m.75-4.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm-.75 7.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldBillFull };
export default React.memo(BoldBillFull);
