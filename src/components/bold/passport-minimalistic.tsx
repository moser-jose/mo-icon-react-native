import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPassportMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M5 5a1 1 0 0 0-.591-.913c.144-.113.318-.19.51-.218l10.798-1.543A2 2 0 0 1 18 4.306v.82A4 4 0 0 0 17 5zm4.75 9a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/><path fill="${color}" fill-rule="evenodd" d="M18 6.17c1.165.413 2 1.524 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12c.35 0 .687.06 1 .17m-6 4.08a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPassportMinimalistic };
export default React.memo(BoldPassportMinimalistic);
