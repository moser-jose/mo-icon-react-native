import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneAlignRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.625 7.875c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75m0 9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75"/><path fill="${color}" fill-rule="evenodd" d="M20.625 23.125a.75.75 0 0 1-.75-.75v-20a.75.75 0 0 1 1.5 0v20a.75.75 0 0 1-.75.75" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneAlignRight);
