import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRecordSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M12.75 12c0 .644.188 1.245.51 1.75h-2.52A3.25 3.25 0 1 0 8 15.25h8A3.25 3.25 0 1 0 12.75 12m1.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m-4.5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRecordSquare };
export default React.memo(BoldDuotoneRecordSquare);
