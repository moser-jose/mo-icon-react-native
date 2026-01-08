import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlinePaletteRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.25 6a4.75 4.75 0 0 1 9.5 0v.432l2.033-2.033a4.75 4.75 0 1 1 6.718 6.717l-2.134 2.134H18a4.75 4.75 0 1 1 0 9.5H6A4.75 4.75 0 0 1 1.25 18zm8.214 15.25H18a3.25 3.25 0 0 0 0-6.5h-2.133l-5.978 5.978a5 5 0 0 1-.425.522m1.286-3.504 7.69-7.69a3.25 3.25 0 1 0-4.596-4.597L10.75 8.553zM6 2.75A3.25 3.25 0 0 0 2.75 6v12a3.25 3.25 0 0 0 6.5 0V6A3.25 3.25 0 0 0 6 2.75m0 15a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5M4.25 18a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlinePaletteRound };
export default React.memo(OutlinePaletteRound);
