import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenStation: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9.078a9.97 9.97 0 0 1-2.922 7.064m.063-14.064c.826.843 1.504 1.83 1.992 2.922M5 16.22a9.97 9.97 0 0 1-3-7.142A9.97 9.97 0 0 1 4.936 2M6 9.06c0-1.555.673-2.963 1.762-3.982m8.523.044C17.345 6.137 18 7.527 18 9.06c0 1.552-.67 2.957-1.753 3.974m-8.447.044A5.7 5.7 0 0 1 6.883 12"/><circle cx="12" cy="9.078" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 11 16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenStation };
export default React.memo(BrokenStation);
