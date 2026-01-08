import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePlayStream: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.141 5A9.97 9.97 0 0 1 22 12a9.97 9.97 0 0 1-2.922 7.064M5 19.142A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.936-7.078m11.349 3.122C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16C6.69 14.979 6 13.556 6 11.982 6 10.427 6.673 9.018 7.762 8" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M13.656 10.451C14.552 11.11 15 11.438 15 12s-.448.891-1.344 1.549a13 13 0 0 1-.718.495 12 12 0 0 1-.653.38c-.894.49-1.34.735-1.741.464s-.437-.838-.51-1.971c-.02-.321-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97.4-.272.847-.027 1.74.462.233.127.457.256.654.381.226.143.471.314.718.495Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePlayStream };
export default React.memo(OutlineDuotonePlayStream);
