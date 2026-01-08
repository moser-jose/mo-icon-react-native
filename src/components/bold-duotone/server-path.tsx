import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneServerPath: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.302 13.737h7.21c1.541 0 2.79-1.202 2.79-2.684s-1.249-2.685-2.79-2.685c1.541 0 2.79-1.201 2.79-2.684 0-1.482-1.249-2.684-2.79-2.684H5.488c-1.54 0-2.79 1.202-2.79 2.684s1.25 2.684 2.79 2.684c-1.54 0-2.79 1.202-2.79 2.685 0 1.482 1.25 2.684 2.79 2.684zm1.628-8.724c-.385 0-.697.3-.697.671 0 .37.312.671.697.671h5.582c.385 0 .697-.3.697-.67a.685.685 0 0 0-.697-.672zm0 5.369c-.385 0-.697.3-.697.67s.312.672.697.672h5.582c.385 0 .697-.3.697-.671a.685.685 0 0 0-.697-.671zM7.35 5.684c0 .494-.417.895-.93.895s-.93-.4-.93-.895c0-.494.416-.895.93-.895.513 0 .93.401.93.895m0 5.369c0 .494-.417.894-.93.894s-.93-.4-.93-.894c0-.495.416-.895.93-.895.513 0 .93.4.93.895" clip-rule="evenodd"/><path fill="${color}" d="M22 18.212a.685.685 0 0 0-.698-.671h-7.577a1.83 1.83 0 0 0-1.027-.988v-2.815h-1.396v2.815c-.466.181-.838.54-1.027.988H2.698c-.386 0-.698.3-.698.671 0 .37.312.671.698.671h7.577A1.86 1.86 0 0 0 12 20.001c.78 0 1.45-.462 1.725-1.118h7.577c.386 0 .698-.3.698-.671" opacity=".6"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneServerPath };
export default React.memo(BoldDuotoneServerPath);
