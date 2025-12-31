import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBluetooth: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.263 4.655C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803L11 12V5.225c0-1.887 0-2.83.605-3.14.362-.185.784-.062 1.395.3"/><path stroke="${color}" stroke-width="1.5" d="m16.263 19.345-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54s-.579.982-1.737 1.804Z"/><path fill="${color}" d="M5.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228 5-3.5-.86-1.228-5 3.5z"/><path fill="${color}" d="M5.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228 5 3.5-.86 1.228-5-3.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBluetooth);
