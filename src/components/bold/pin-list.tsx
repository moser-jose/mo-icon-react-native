import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPinList: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M22 8.377a.74.74 0 0 1-.744.731h-4.962a.74.74 0 0 1-.745-.731c0-.404.334-.732.745-.732h4.962c.41 0 .744.328.744.732m0 4.389a.74.74 0 0 1-.744.731h-3.97a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h3.97c.41 0 .744.328.744.732" clip-rule="evenodd"/><path fill="${color}" d="m12.587 8.238.364.357c1.518 1.492 2.278 2.239 2.277 3.047 0 .265-.055.526-.161.769-.325.743-1.323 1.133-3.318 1.914l-.145.056c-.565.221-.848.332-1.076.51a2 2 0 0 0-.44.48c-.157.24-.24.529-.407 1.104-.258.893-.386 1.34-.661 1.537a1 1 0 0 1-.71.181c-.338-.04-.672-.369-1.34-1.025l-1.026-1.01-2.673 2.628a.754.754 0 0 1-1.053 0 .723.723 0 0 1 0-1.035l2.663-2.637-1.017-1c-.667-.655-1.001-.983-1.043-1.316a.96.96 0 0 1 .184-.697c.202-.27.656-.397 1.564-.65.586-.163.879-.245 1.124-.399q.28-.176.488-.433c.181-.224.294-.502.519-1.058l.057-.142c.794-1.96 1.191-2.941 1.948-3.26.247-.105.513-.159.781-.159.824 0 1.583.745 3.101 2.238"/><path fill="${color}" fill-rule="evenodd" d="M22 17.155a.74.74 0 0 1-.744.731h-8.932a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h8.932c.41 0 .744.328.744.732" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPinList };
export default React.memo(BoldPinList);
