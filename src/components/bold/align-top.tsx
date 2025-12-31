import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldAlignTop: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.25 3.75c0 .414.336.75.75.75h20A.75.75 0 0 0 22 3H2a.75.75 0 0 0-.75.75" clip-rule="evenodd"/><path fill="${color}" d="M7.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.848 5 9.315 5 10.25v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201A1.5 1.5 0 0 0 9.799 21c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201m9 0c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.848 14 9.315 14 10.25v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldAlignTop);
