import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneUfo: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M5.675 8.594C3.432 9.359 2 10.523 2 11.827c0 1.207 1.23 2.296 3.195 3.058l-1.338 2.23a.75.75 0 0 0 1.286.771l1.5-2.5.017-.03c1.347.356 2.91.58 4.59.633V19a.75.75 0 0 0 1.5 0v-3.01c1.68-.052 3.243-.278 4.59-.633l.017.03 1.5 2.5a.75.75 0 1 0 1.286-.771l-1.338-2.23C20.77 14.123 22 13.035 22 11.826c0-1.303-1.432-2.467-3.675-3.232-.124.29-.331.584-.668.818C16.869 9.96 15.3 10.5 12 10.5s-4.868-.54-5.657-1.088a1.9 1.9 0 0 1-.668-.818M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m11-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/><path fill="${color}" d="M7.055 8.005A4.73 4.73 0 0 1 11.73 4h.542a4.73 4.73 0 0 1 4.674 4.005.43.43 0 0 1-.145.175c-.414.288-1.61.82-4.8.82s-4.386-.532-4.8-.82a.43.43 0 0 1-.145-.175" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneUfo };
export default React.memo(BoldDuotoneUfo);
