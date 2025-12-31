import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPallete2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.341A9.93 9.93 0 0 1 12 2c5.523 0 10 4.489 10 10.026 0 8.152-8.161 2.393-9.738 4.9-.395.628.032 1.41.555 1.935a1.68 1.68 0 0 1 0 2.372c-.523.525-1.235.838-1.97.753C5.867 21.413 2 17.172 2 12.026A10 10 0 0 1 3.345 7"/><circle cx="17.5" cy="11.5" r="1.5" stroke="${color}" stroke-width="1.5"/><circle cx="6.5" cy="11.5" r="1.5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M11.085 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenPallete2);
