import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSimCardMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224 8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483 4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"/><path stroke="${color}" stroke-width="1.5" d="M14.5 13h-5c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C7 14.803 7 15.035 7 15.5s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h5c.465 0 .697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89s0-.697-.038-.89a2 2 0 0 0-1.572-1.572C15.197 13 14.965 13 14.5 13Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSimCardMinimalistic };
export default React.memo(OutlineDuotoneSimCardMinimalistic);
