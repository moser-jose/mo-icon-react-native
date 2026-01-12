import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneRecordMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M21 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-11 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6.5 15h11" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneRecordMinimalistic };
export default React.memo(OutlineDuotoneRecordMinimalistic);
